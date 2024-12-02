import { green } from 'chalk';

/**
 * Adds mark check symbol
 */
const addCheckMark = (callback) => {
  process.stdout.write(green(' ✓'));
  if (callback) callback();
};

export default addCheckMark;
