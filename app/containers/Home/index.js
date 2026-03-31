import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Home from 'components/Home';
import { makeSelectIsUserLoggedIn } from '../GlobalHeaderContainer/selectors';
import { fetchArtists as fetchArtistsAction } from './actions';
import { makeSelectArtistsResponseData } from './selectors';


const mapStateToProps = () => (
  createStructuredSelector({
    isUserLoggedIn: makeSelectIsUserLoggedIn(),
    artists: makeSelectArtistsResponseData(),
  })
);

export const mapDispatchToProps = (dispatch) => ({
  fetchArtists: () => dispatch(fetchArtistsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
