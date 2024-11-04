import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field } from 'redux-form/immutable';
import InputField from '../InputField';

const CheckBoxField = (props) => {
  const { className, model, form, ...other } = props;

  const componentClassName = classnames(className, {});

  return (
    <Field
      className={componentClassName}
      component={InputField}
      name={`${form}${model}`}
      type="checkbox"
      {...other}
    />
  );
};

CheckBoxField.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string,
  form: PropTypes.string,
};

export default CheckBoxField;
