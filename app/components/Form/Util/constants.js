export const ENGLISH_LETTERS_WITH_NUMBERS_PATTERN = /^[A-Za-z0-9]+$/;
export const ENGLISH_LETTERS_PATTERN = /^[a-zA-Z \t\r\n\\]*$/;
export const ADDRESS_PATTERN = /^[A-Za-z\d\s-.'# ]*$/;
export const CITY_PATTERN = /^[A-Za-z-. ]+$/;
export const STATE_PATTERN = /^[A-Za-z. ]+$/;
export const ZIP_PATTERN = /^[A-Za-z\d-() ]+$/;

export const MAX_YEARS = 150;
export const MIN_YEARS = 0;

export const METRIC = {
  YEARS: 'asYears',
  WEEKS: 'asWeeks',
  DAYS: 'asDays',
  MONTHS: 'asMonths',
};
