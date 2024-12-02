/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * ⁠English-locale intl context around them.
 */

import React from 'react';
import { createIntl, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

// You can pass your messages to the Int1Provider. Optional: remove if unneeded.
const messages = require('translations/en.json'); // en.json

// const messages = {}; // en.json

// Create the Intl to retrieve context for wrapping around.
const intl = createIntl({ locale: 'en-US', messages }, {});

/**
 * When using React-Intl injectIntl on components, props.intl is required.
 */
export function nodeWithIntlProp(node) {
  return React.cloneElement(node, { intl });
}

/**
 * Basic Example: shallowWithIntl(<Foo />)
 * Advanced Example: `shallowWithIntl(<Foo />, { context: { router: { routes: []}}})`
 * @param {React.Component} node
 * @param options options for the node
 * @param {Object} options.context context to supply to the component
 * @param {Object} options.lifecycleExperimental if true, allows additional react lifecycle methods to run. This property is now replaced by disableLifecycleMethods in enzyme 3 which flips the value.
 * @returns {React.Component} returns original node with intl prop and optional context
 */
export function shallowWithIntl(
  node,
  { context, lifecycleExperimental = false } = {}
) {
  return shallow(nodeWithIntlProp(node), {
    context: { ...context, intl },
    disableLifecycleMethods: !lifecycleExperimental,
  });
}

/**
 * Basic Example: `mountWithIntl(<Foo />)`
 * Advanced Example: `mountWithIntl(<Foo />, { context: { router: { routes: []}}, childContextTypes: { themeColor: '#0000FF"} })`
 * @param {React.Component} node
 * @param options options for the node
 * @param {Object} options.context context to supply to the component
 * @param {Object} options.childContextTypes context to be inherited by children
 * @returns {React.Component} returns intl prop and optional context to the original node and mounts it
 */
export function mountwithIntl(node, { context, childContextTypes } = {}) {
  return mount(nodeWithIntlProp(node), {
    context: { ...context, intl },
    childContextTypes: { intl: intlShape, ...childContextTypes },
  });
}
