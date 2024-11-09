import React from 'react';
import PropTypes from 'prop-types';

export const Home = ({ loadHome, homeData, tokenData }) => {
  console.log('setup components/Home Home tokenData', tokenData);
  console.log('setup components/Home Home homeData', homeData);

  const handleClick = () => {
    loadHome();
  };

  return (
    <div>
      <p>New App Homepage</p>
      <button type="button" onClick={() => handleClick()}>Click me</button>
      <p>
        homeData:
        {homeData}
      </p>
    </div>
  );
};

Home.propTypes = {
  loadHome: PropTypes.func,
  homeData: PropTypes.string,
  tokenData: PropTypes.string,
};

Home.defaultProps = {
  // loadHome: ''
};

export default Home;
