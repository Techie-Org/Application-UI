import moment from 'moment';
import { isString } from 'lodash';
import {
  ENGLISH_LETTERS_WITH_NUMBERS_PATTERN,
  ENGLISH_LETTERS_PATTERN,
  METRIC,
  MAX_YEARS,
  MIN_YEARS,
} from './constants';

export const isRequired = (val) => val && !!(val?.length ?? true);

export const isBlank = (string) => !isString(string) || string?.trim().length === 0;

export const isLetterOrNumerals = (val) => val && ENGLISH_LETTERS_WITH_NUMBERS_PATTERN;
export const isLetters = (val) => val && ENGLISH_LETTERS_PATTERN.test(val);

// contains only digits characters
export const isNumeric = (val) => /^[0-9]+$/i.test(val);

// contains only alphabetic characters
export const isAlphabetic = (val) => /^[a-z]+$/i.test(val);

// contains alphabetics characters with space
export const isAlphabeticWithSpace = (val) => /^[a-z\s-. ]+$/i.test(val);

export const isAlphaNumericWithSpace = (val) => /^[a-z0-9\s-. ]+$/i.test(val);

export const isUsableExpDate = (month, year) => {
  const currentMonth = moment().format('MM');
  const currentYear = moment().format('YYYY');

  const isUsable = `${year}${month}` >= `${currentYear}${currentMonth}`;
  return isUsable;
};

export const isDateOfBirth = ({
  minRange = { value: MIN_YEARS, metric: METRIC.YEARS },
  maxRange = { value: MAX_YEARS, metric: METRIC.YEARS },
  now = moment(),
} = {}) => (val) => {
  // const birthDate = moment(val, [M_D_YYYY, MM_DD_YYYY], true);
  const birthDate = moment(val, ['M_D_YYYY', 'MM_DD_YYYY'], true);
  const duration = moment.duration(now.diff(birthDate));

  let minDiff;
  let maxDiff;

  try {
    minDiff = minRange?.metric && duration?.[minRange?.metric]();
    maxDiff = maxRange?.metric === METRIC.YEARS
      ? now.diff(birthDate, 'years', true)
      : maxRange?.metric && duration?.[maxRange?.metric]();
  } catch (error) {
    return false;
  }
  const isValid = birthDate.isValid();
  const isMinValid = minRange?.value ? minDiff >= minRange?.value : true;
  const isMaxValid = maxRange?.value ? maxDiff <= maxRange?.value : true;
  const isNotFuture = duration.asMilliseconds() > 0;

  return isValid && isNotFuture && isMinValid && isMaxValid;
};

export const isWithinMaxLength = (value, maxLength) => (value?.length ?? 0) <= maxLength;
export const isWithinMinLength = (value, minLength) => (value?.length ?? 0) >= minLength;

// contains alphanumeric characters, is withinMinLength, or is blank.
export const isAlphanumericWithinMinLength = (val, minLength) => isBlank(val)
  || (isLetterOrNumerals(val) && isWithinMinLength(val, minLength));

// contains alphanumeric characters, is withinMinLength, and is not blank.
export const isAlphanumericWithinMinLengthNonBlank = (val, minLength) => !isBlank(val)
  || (isLetterOrNumerals(val) && isWithinMinLength(val, minLength));

export const EMAIL_ADDRESS_ALLOWED_CHARS = /^[a-zA-Z0-9@_.-]*$/;

export const EMAIL_ADDRESS_ALLOWED_CHARS_WITH_COMMA = /^[a-zA-Z0-9\s,@_.-]*$/;

export const EMAIL_ADDRESS_MUST_HAVE_AT = /@/;

export const EMAIL_ADDRESS_PATTERN = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

export const INDIA_ZIP_CODE_PATTERN = /(^\d{6}$)/;

export const FILE_REFERENCE_NUMBER = /^([a-zA-Z0-9]){9,15}$/;

export const MULTIPLE_EMAIL_ADDRESS_SEPERATED_BY_COMMAS = /^[\s]*((([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-z\-0-9]+\.)+[a-zA-Z]{1,}))[\s]*,{1}[\s]*)*((([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-z\-0-9]+\.)+[a-zA-Z]{1,})))[\s]*$/;

export const isAbove18 = (val) => isDateOfBirth({ minRange: { value: 18, metric: METRIC.YEARS } })(val);

export const isValidEmail = (val, optional = true) => (isRequired(val) || optional) && EMAIL_ADDRESS_ALLOWED_CHARS.test(val)
  && /@/.test(val)
  && EMAIL_ADDRESS_PATTERN.test(val);

export const isValidDate = (date) => {
  const mDate = moment(date, ['M/DD/YYYY', 'M/D/YYYY'], true);
  const today = moment();
  return mDate.isValid() && mDate.diff(today) < 0;
};

// Validators for Covid19 Documentation dates.
export const isValidBirth = (date) => {
  const mDate = moment(date, ['M/DD/YYYY', 'M/D/YYYY'], true);
  return mDate.isSameOrAfter(moment('1900-01-01'));
};

export const isValidDose = (date) => {
  const mDate = moment(date, ['M/DD/YYYY', 'M/D/YYYY'], true);
  return mDate.isSameOrAfter(moment('2020-01-01'));
};

export const isDateOrdered = (allValues) => () => {
  const firstDoseDateStr = allValues?.firstDoseVaccinationDate || '';
  const secondDoseDateStr = allValues?.secondDoseVaccinationDate || '';
  const thirdDoseDateStr = allValues?.thirdDoseVaccinationDate || '';

  const firstDoseDate = moment(
    firstDoseDateStr,
    ['M/DD/YYYY', 'M/D/YYYY'],
    true
  );
  const secondDoseDate = moment(
    secondDoseDateStr,
    ['M/DD/YYYY', 'M/D/YYYY'],
    true
  );
  const thirdDoseDate = moment(
    thirdDoseDateStr,
    ['M/DD/YYYY', 'M/D/YYYY'],
    true
  );

  if (allValues?.thirdDoseVaccinationDate) {
    return (
      firstDoseDate?.isBefore(secondDoseDate)
      && secondDoseDate?.isBefore(thirdDoseDate)
    );
  }

  return !firstDoseDate?.isSameOrAfter(secondDoseDate);
};
