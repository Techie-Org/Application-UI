import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button as MUIButton } from '@mui/material';


const Button = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const componentClassName = classnames(className, {});

  return (
    <MUIButton
      className={componentClassName}
      {...other}
    >
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
