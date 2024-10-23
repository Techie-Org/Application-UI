import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const LocalForm = (props) => {
  const {
    className,
    children,
    onSubmit,
  } = props;

  const componentClassName = classnames(className, {});

  const handleSubmit = (formData) => {
    formData.preventDefault();

    onSubmit(formData);
  };

  return (
    <form
      className={componentClassName}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

LocalForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default LocalForm;
