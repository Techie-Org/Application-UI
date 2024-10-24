import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from '@mui/material';
import styles from './styles.scss';

export const Home = ({ loadHome, homeData, tokenData }) => {
  console.log('setup components/Home Home tokenData', tokenData);
  console.log('setup components/Home Home homeData', homeData);

  const handleClick = () => {
    loadHome();
  };

  return (
    <div>
      <p>New App Homepage</p>
      <Button onClick={() => handleClick()}>Click me</Button>
      <Alert className={styles.homeAlert}>This is an alert</Alert>
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
