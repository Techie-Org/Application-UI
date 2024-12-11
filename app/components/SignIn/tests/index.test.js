import React from 'react';
import { Avatar } from '@mui/material';
import Button from 'components/_DesignWrappers/Button';
import LocalForm from 'components/_DesignWrappers/LocalForm';
import TextField from 'components/_DesignWrappers/TextField';
import CheckBoxField from 'components/_DesignWrappers/CheckBoxField';
import TextLink from 'components/_DesignWrappers/TextLink';
import { shallowWithIntl } from '@internals/testing/intl-enzyme-test-helper';
import SignIn from '..';

const signInUserMock = jest.fn();

const defaultProps = {
  signInUser: signInUserMock,
};

describe('SignIn component tests', () => {
  const componentWrapper = shallowWithIntl(<SignIn {...defaultProps} />).dive();

  it('should render SignIn component', () => {
    expect(componentWrapper.find(LocalForm).length).toBe(1);
    expect(componentWrapper.find(Avatar).length).toBe(1);
    expect(componentWrapper.find(TextField).length).toBe(2);
    expect(componentWrapper.find(CheckBoxField).length).toBe(1);
    expect(componentWrapper.find(Button).length).toBe(1);
    expect(componentWrapper.find(TextLink).length).toBe(2);
  });
  it('should render email and password textfields', () => {
    expect(componentWrapper.find(TextField).length).toBe(2);
    expect(componentWrapper.find(TextField).at(0).props().model).toEqual('.email');
    expect(componentWrapper.find(TextField).at(1).props().model).toEqual('.password');
  });
  it('should dispatch signInUser action on form submit', () => {
    const formDataMock = { email: 'test@gmail.com', password: 'test@1234' };
    const signInForm = componentWrapper.find('[data-test-id="signInForm"]');

    expect(signInForm.exists()).toBeTruthy();
    signInForm.simulate('submit', { ...formDataMock });
    expect(signInUserMock).toHaveBeenCalledWith(formDataMock);
  });
});
