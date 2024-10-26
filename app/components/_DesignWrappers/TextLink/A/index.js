import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import classnames from 'classnames';


const A = (props) => {
  const {
    href,
    ariaLabel,
    intl,
    children,
    className,
    // isForceReload,
    ...rest
  } = props;

  return (
    <Link
      to={href}
      aria-label={ariaLabel}
      className={classnames('', className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

A.propTypes = {
  // isForceReload: PropTypes.bool,
  intl: PropTypes.shape(intlShape),
  href: PropTypes.any.isRequired,
  ariaLabel: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default injectIntl(A);
