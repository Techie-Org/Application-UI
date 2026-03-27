import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Loader2 } from 'lucide-react';
import styles from './styles.scss';

const ButtonWithSpinner = (props) => {
  const {
    className,
    children,
    spinOn,
    ...other
  } = props;

  const componentClassName = classnames(className, {});

  return (
    <button
      type="button"
      className={componentClassName}
      {...other}
    >
      {spinOn && <Loader2 className={styles.buttonSpinner} size={18} />}
      {children || props.text}
    </button>
  );
};

ButtonWithSpinner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  spinOn: PropTypes.bool,
};

export default ButtonWithSpinner;
