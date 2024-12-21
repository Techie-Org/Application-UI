import moment from 'moment';
import { getMonthList, getDateFormatByPOS } from '../i18n';

describe('getMonthList', () => {
  it("should generate the month's list using the defaults values", () => {
    const result = getMonthList();
    expect(result).toHaveLength(12);
    const expected = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    expect(result).toEqual(expected);
  });

  it("should generate the month's list using a specific notation and locale", () => {
    const result = getMonthList('en-GB', 'short');
    const expected = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      .map(expect.stringMatching);

    expect(result).toHaveLength(12);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});

describe('Getting date format', () => {
  it('should get date format correctly for spanish language', () => {
    // Arrange
    const locale = 'es-ES';
    const mockDate = new Date('4/19/2023');
    const expectedFormat = Intl.DateTimeFormat(locale, {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(mockDate).replace(/\//g, '_');

    // Act
    const dateFormat = getDateFormatByPOS(locale);

    // Assert
    expect(moment(mockDate).format(dateFormat)).toBe(expectedFormat);
  });

  it('should get date format correctly for english language', () => {
    const mockedLocale = 'en-US';
    const expectedDateFormat = 'MM_DD_YYYY';
    const dateFormat = getDateFormatByPOS(mockedLocale); expect(dateFormat).toContain(expectedDateFormat);
  });

  it('should get date format correctly for japanese language', () => {
    const mockedLocale = 'ja-JP';
    const expectedDateFormat = ['YYYY_MM_DD', 'MM_DD_YYYY'];
    const dateFormat = getDateFormatByPOS(mockedLocale);
    expect(expectedDateFormat).toContain(dateFormat);
  });
});
