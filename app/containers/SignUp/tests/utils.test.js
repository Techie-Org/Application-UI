import { parseSignUpFormData } from '../utils';
import { signUpFormDataMock, expectedSignUpFormData } from './mockData';

describe('parseSignUpFormData', () => {
  it('should return proper signUpFormData', () => {
    expect(parseSignUpFormData(signUpFormDataMock)).toEqual(expectedSignUpFormData);
  });
});
