import { red } from 'chalk';

/**
 * Adds mark cross symbol
 */
const addXMark = (callback) => {
  process.stdout.write(red(' ✘'));
  if (callback) callback();
};

export default addXMark;
