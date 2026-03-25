import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { history } from 'utils/browserHistory';
import BrowseArtists from './BrowseArtists';
import ArtistDetail from './ArtistDetail';
import styles from './styles.scss';

const Home = ({
  artists,
  fetchArtists,
  isUserLoggedIn,
}) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [artistDetailsModelOpen, setArtistDetailsModelOpen] = useState(false);

  useEffect(() => {
    fetchArtists();
  }, []);
  console.log('homepage props: ', { artists, isUserLoggedIn });

  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
    setArtistDetailsModelOpen(true);
  };

  const handleLoginRequired = () => {
    history.navigate('/account/signIn');
  };

  return (
    <div>
      {/* <p>New App Homepage</p>
      {/* <button type="button" onClick={() => handleClick()}>Click me</button> */}
      {/* <p>
        homeData:
        {homeData}
      </p> */}
      {!artistDetailsModelOpen && <BrowseArtists artists={artists} onSelectArtist={handleSelectArtist} />}
      {artistDetailsModelOpen && selectedArtist && (
        <ArtistDetail
          artist={selectedArtist}
          onBack={() => setArtistDetailsModelOpen(false)}
          isAuthenticated={isUserLoggedIn}
          onLoginRequired={handleLoginRequired}
        />
      )}
    </div>
  );
};

Home.propTypes = {
  fetchArtists: PropTypes.func,
  artists: PropTypes.array,
  isUserLoggedIn: PropTypes.bool,
};

// Home.defaultProps = {
//   // loadHome: ''
// };

export default Home;
