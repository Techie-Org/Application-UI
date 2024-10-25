import moment from 'moment';

const RTF_UNICODE = 8206;
const sanitizeIntlDate = (dateString) => [...dateString]?.filter((char) => char !== String.fromCharCode(RTF_UNICODE))?.join('');

export const getMonthList = (locale = 'en', notation = 'long') => Array.from({ length: 12 }).map(
  (__, index) => Intl.DateTimeFormat(locale, { month: notation })
    .format(moment(index + 1, 'MM').toDate()),
);

export const getDateFormatByPOS = (locale) => {
  // We supply a testDate because the formatDate for DateTimeFormat does not work on IE11
  // so we look for the year/month based on the test date to find the format ourselves
  const testDate = new Date(Date.UTC(2020, 11, 1, 18, 0, 0)); // date for Dec 1st 2020 (month: 0-11)
  const dateFormat = Intl.DateTimeFormat(locale, { month: '2-digit', year: '2-digit', day: '2-digit', timeZone: 'UTC' }).format(testDate);

  // We need clean unexpected RTF (Right-to-left) characters that are produced by Intl.DateTimeFormat on IE11
  const sanitizedDate = sanitizeIntlDate(dateFormat);
  const yearPosition = sanitizedDate.indexOf('20');
  const monthPosition = sanitizedDate.indexOf('12');

  if (yearPosition === 0) {
    return 'YYYY_MM_DD';
  }
  if (monthPosition === 0) {
    return 'MM_DD_YYYY';
  }
  // default (first element is day)
  return 'DD_MM_YYYY';
};
