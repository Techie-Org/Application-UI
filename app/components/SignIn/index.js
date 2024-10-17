import React from 'react';
import PropTypes from 'prop-types';

export const SignIn = ({ loadHome, homeData, tokenData }) => {
  console.log('setup components/Home Home tokenData', tokenData);
  console.log('setup components/Home Home homeData', homeData);

  const handleClick = () => {
    loadHome();
  };

  return (
    <div>
      <p>Sign In Page rendered</p>
      <button type="button" onClick={() => handleClick()}>Click me</button>
      <p>
        homeData:
        {homeData}
      </p>
    </div>
  );
};

SignIn.propTypes = {
  loadHome: PropTypes.func,
  homeData: PropTypes.string,
  tokenData: PropTypes.string,
};

SignIn.defaultProps = {
  // loadHome: ''
};

export default SignIn;
