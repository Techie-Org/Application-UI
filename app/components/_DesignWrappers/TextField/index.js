import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field } from 'redux-form/immutable';
import InputField from '../InputField';

const TextField = (props) => {
  const { className, model, form, isPassword, validators, ...other } = props;

  const componentClassName = classnames(className, {});

  return (
    <Field
      name={`${form}${model}`}
      className={componentClassName}
      component={InputField}
      type={isPassword ? 'password' : 'text'}
      validate={validators}
      {...other}
    />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string,
  form: PropTypes.string,
  isPassword: PropTypes.bool,
  validators: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
};

export default TextField;
