import { parseSignInFormData } from '../utils';
import { expectedSignInFormData } from './mockData';

describe('parseSignInFormData', () => {
  it('should return proper signInFormData', () => {
    const formDataMock = {
      email: 'testFOUR@gmail.com',
      password: 'Test1234',
    };
    expect(parseSignInFormData(formDataMock)).toEqual(expectedSignInFormData);
  });
});
