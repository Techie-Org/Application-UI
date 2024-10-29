import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import A from './A';
import './styles.css';


const TextLink = (props) => {
  const {
    href,
    className,
    children,
    target,
    theme,
    ariaLabel,
    variant,
    ...other
  } = props;

  const componentClassName = classnames(className, 'lc-textlink');

  return (
    <A
      className={componentClassName}
      href={href}
      target={target}
      ariaLabel={ariaLabel}
      {...other}
    >
      {children}
    </A>
  );
};

TextLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(['bold']),
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  theme: PropTypes.oneOf(['inverted']),
};

export default TextLink;
