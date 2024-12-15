import { isString } from 'lodash';
import { EMAIL_ADDRESS_ALLOWED_CHARS } from '../Util';
import { ENGLISH_LETTERS_PATTERN } from '../Util/constants';

export const isRequiredValidator = (message) => (val) => val && !!(val?.length ?? true) ? undefined : message;

export const isBlankValidator = (message) => (string) => !isString(string) || string?.trim().length === 0 ? message : '';

export const confirmPasswordValidator = (message) => (val, formValues, instanceRef) => val === formValues.get(instanceRef.form).toJS().password ? '' : message;

export const NAME_PATTERN = ENGLISH_LETTERS_PATTERN;

export const EMAIL_ALLOWED_PATTERNS = EMAIL_ADDRESS_ALLOWED_CHARS;

export const PHONE_NUMBER_PATTERN = /^[0-9]*$/;

export const lengthCheckValidator = (message, min = 0, max = 25) => (value) => value && (value.length < min || value.length > max) ? message : '';

export const emailValidator = (message) => (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? message
  : '';
