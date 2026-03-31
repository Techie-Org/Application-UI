import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { reduxForm, Form, destroy as destroyForm } from 'redux-form/immutable';

const LocalForm = (props) => {
  const { className, children, onSubmit, form, handleSubmit } = props;

  const dispatch = useDispatch();
  const componentClassName = classnames(className, {});

  useEffect(() => () => { // This part runs on Mount (do nothing)
    // This part runs on Unmount
    // We manually tell Redux Form to kill the state for this specific form ID
    if (form) {
      dispatch(destroyForm(form));
      console.log(`🧹 Form ${form} has been cleared from Redux.`);
    }
  },
  [form, dispatch]); // Dependency on 'form' ensures we clear the right ID

  const handleLocalSubmit = (formData) => {
    onSubmit(formData.toJS());
  };

  // // Binding form prop to the individual children, except button(must have type)
  // const renderChildren = () => React.Children.map(children, (child) => !child.props.type ? React.cloneElement(child, { form }) : child);

  return (
    <Form
      className={componentClassName}
      onSubmit={handleSubmit(handleLocalSubmit)}
      form={form}
    >
      {children}
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
