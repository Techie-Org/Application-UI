import { createStructuredSelector } from 'reselect';
import { loadHome as loadHomeAction } from './actions';
import { connect } from 'react-redux';
import Home from 'components/Home';
import { makeSelectHomeResponse } from './selectors';


const mapStateToProps = () => (
  createStructuredSelector({
    tokenData: () => "1234", // sample data initially
    homeData: makeSelectHomeResponse(),
  })
);

export const mapDispatchToProps = (dispatch) => ({
  loadHome: (request) => dispatch(loadHomeAction(request)), // Sample action dispatched initially
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

