import { isString } from 'lodash';
import { EMAIL_ADDRESS_ALLOWED_CHARS } from '../Util';
import { ENGLISH_LETTERS_PATTERN } from '../Util/constants';

export const isRequiredValidator = (message) => (val) =>
  val && !!(val?.length ?? true) ? undefined : message;

export const isBlankValidator = (message) => (string) =>
  !isString(string) || string?.trim().length === 0 ? message : '';

export const NAME_PATTERN = ENGLISH_LETTERS_PATTERN;

export const EMAIL_ALLOWED_PATTERNS = EMAIL_ADDRESS_ALLOWED_CHARS;

export const PHONE_NUMBER_PATTERN = /^[0-9]*$/;
