import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Home from 'components/Home';
import { makeSelectIsUserLoggedIn } from '../GlobalHeaderContainer/selectors';
import { fetchArtists as fetchArtistsAction } from './actions';
import { makeSelectHomeResponse } from './selectors';


const mapStateToProps = () => (
  createStructuredSelector({
    isUserLoggedIn: makeSelectIsUserLoggedIn(),
    artists: makeSelectHomeResponse(),
  })
);

export const mapDispatchToProps = (dispatch) => ({
  // loadHome: (request) => dispatch(loadHomeAction(request)), // Sample action dispatched initially
  fetchArtists: () => dispatch(fetchArtistsAction()), // Sample action dispatched initially
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
