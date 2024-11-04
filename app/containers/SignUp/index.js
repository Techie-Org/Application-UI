import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import SignUp from 'components/SignUp';
import { registrationSuccessful as registrationSuccessfulAction,signUpFormData as signUpFormDataAction } from './actions';
import { makeSelectRegistrationStatus,makeSelectSignUpFormData } from './selectors';

const mapStateToProps = () => createStructuredSelector({
  registrationStatus:makeSelectRegistrationStatus(),
  signUpData:makeSelectSignUpFormData(),
});

export const mapDispatchToProps = (dispatch) => ({

  registrationSuccessful:()=>dispatch(registrationSuccessfulAction()),
  signUpFormData:(formData)=>dispatch(signUpFormDataAction(formData))
 
});

const SignUpContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);

export default SignUpContainer;
