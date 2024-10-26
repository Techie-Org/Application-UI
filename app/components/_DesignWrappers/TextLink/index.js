import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import A from './A';


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

  const componentClassName = classnames(className, {});

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
