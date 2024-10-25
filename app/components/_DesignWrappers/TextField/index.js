import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field } from 'redux-form/immutable';
import InputField from './InputField';


const TextField = (props) => {
  const {
    className,
    model,
    ...other
  } = props;

  const componentClassName = classnames(className, {});

  return (
    <Field
      name={model}
      className={componentClassName}
      component={InputField}
      {...other}
    />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string,
};

export default TextField;
