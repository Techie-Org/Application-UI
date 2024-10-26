import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { reduxForm, Form } from 'redux-form/immutable';

const LocalForm = (props) => {
  const { className, children, onSubmit, form, handleSubmit } = props;

  const componentClassName = classnames(className, {});

  const handleLocalSubmit = (formData) => {
    onSubmit(formData.toJS());
  };

  // Binding form prop to the individual children, except button(must have type)
  const renderChildren = () => React.Children.map(children, (child) => !child.props.type ? React.cloneElement(child, { form }) : child);

  return (
    <Form
      className={componentClassName}
      onSubmit={handleSubmit(handleLocalSubmit)}
      form={form}
    >
      {renderChildren()}
    </Form>
  );
};

LocalForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  form: PropTypes.string,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default reduxForm()(LocalForm);
