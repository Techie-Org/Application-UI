import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { reduxForm, Form } from 'redux-form/immutable';

const LocalForm = (props) => {
  const {
    className,
    children,
    onSubmit,
    handleSubmit,
    ...other
  } = props;


  const componentClassName = classnames(className, {});

  const handleLocalSubmit = (formData) => {
    onSubmit(formData);
  };

  return (
    <Form
      className={componentClassName}
      onSubmit={handleSubmit(handleLocalSubmit)}
      {...other}
    >
      {children}
    </Form>
  );
};

LocalForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default reduxForm()(LocalForm);
