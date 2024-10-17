import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import GlobalHeader from 'components/GlobalHeader';
// import { makeSelectHomeResponse } from "./selectors";
import compose from 'lodash/fp/compose';
import { openModal } from 'containers/LoginButtonContainer/actions';

const mapStateToProps = createStructuredSelector({
  loading: () => true, // need to pass a selector from selectors.js
});

export const mapDispatchToProps = (dispatch) => ({
  openSignInModal: () => dispatch(openModal()),
});

const GlobalHeaderContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(GlobalHeader);

export default GlobalHeaderContainer;
