/**
 * This script will extract the internationalization messages from all components
 * and package them in the translation json files in the translations file.
 */

import fs from 'fs';
import { glob } from 'glob';
import { transform } from '@babel/core';
import get from 'lodash/get';

import { appLocales, DEFAULT_LOCALE } from '../../app/i18n';

import animateProgress from './helpers/progress';
import addCheckmark from './helpers/checkmark';
import addXMark from './helpers/xmark';

import babel from '../../babel.config';

import 'shelljs/global';

const { presets } = babel;
const plugins = babel.plugins || [];

plugins.push(['react-intl']);

// Glob to match all js files except test files
const FILES_TO_PARSE = 'app/**/!(*.test).js';

const newLine = () => process.stdout.write('\n');

// Progress Logger
let progress;
const task = (message) => {
  progress = animateProgress(message);
  process.stdout.write(message);

  return (error) => {
    if (error) {
      process.stderr.write(error);
      return addXMark(() => newLine());
    }
    clearTimeout(progress);
    return addCheckmark(() => newLine());
  };
};

const readFile = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, 'utf8', (error, value) => (error ? reject(error) : resolve(value)));
});

const writeFile = (fileName, data) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, data, (error, value) => (error ? reject(error) : resolve(value)));
});

// Store existing translations into memory
const oldLocaleMappings = [];
const localeMappings = [];

// Loop to run once per locale
for (const locale of appLocales) {
  oldLocaleMappings[locale] = {};
  localeMappings[locale] = {};
  // File to store translation messages into
  const translationFileName = `app/translations/${locale}.json`;
  try {
    // Parse the old translation message JSON files
    const messages = JSON.parse(fs.readFileSync(translationFileName));
    const messageKeys = Object.keys(messages);
    for (const messageKey of messageKeys) {
      oldLocaleMappings[locale][messageKey] = messages[messageKey];
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      process.stderr.write(
        `There was an error loading this translation file: ${translationFileName}
        \n${error}`,
      );
    }
  }
}

const extractFromFile = async (filename) => {
  try {
    const code = await readFile(filename);

    const output = transform(code, { filename, presets, plugins });
    const messages = get(output, 'metadata.react-intl.messages', []);

    for (const message of messages) {
      for (const locale of appLocales) {
        const oldLocaleMapping = oldLocaleMappings[locale][message.id];
        // Merge old translations into the babel extracted instances where react-intl is used
        const newMsg = locale === DEFAULT_LOCALE ? message.defaultMessage : '';
        localeMappings[locale][message.id] = oldLocaleMapping || newMsg;
      }
    }
  } catch (error) {
    process.stderr.write(`\nError transforming file: ${filename}\n${error}\nAborting en.json generation`);
    addXMark(() => newLine());
    process.exit(1);
  }
};

(async function main() {
  const memoryTaskDone = task('Storing language files in memory.');
  const files = await glob(FILES_TO_PARSE, { ignore: 'node_modules/**' });
  memoryTaskDone();

  const extractTaskDone = task('Run extraction on all files');

  // Run extraction on all files that match the glob on line 16
  await Promise.all(
    files.map((fileName) => extractFromFile(fileName)),
  );
  extractTaskDone();

  // Make the directory if it doesn't exist, especially for first run
  mkdir('-p', 'app/translations'); // eslint-disable-line

  for (const locale of appLocales) {
    const translationFileName = `app/translations/${locale}.json`;
    const localeTaskDone = task(
      `Writing translation messages for ${locale} to: ${translationFileName}`,
    );

    try {
      // Sort the translation JSON file slocaleo that git diffing is easier
      // Otherwise the translation messages will jump around every time we extract
      const messages = {};
      Object.keys(localeMappings[locale]).sort().forEach((key) => {
        messages[key] = localeMappings[locale][key];
      });

      // Write to file the JSON representation of the translation messages
      const prettified = `${JSON.stringify(messages, null, 2)}\n`;

      // eslint-disable-next-line no-await-in-loop
      await writeFile(translationFileName, prettified);

      localeTaskDone();
    } catch (error) {
      localeTaskDone(
        `There was an error saving this translation file: ${translationFileName}
        \n${error}`,
      );
    }
  }

  process.exit();
}());
