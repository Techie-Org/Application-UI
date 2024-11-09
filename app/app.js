import React, { lazy, Suspense } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import AppHeader from 'containers/App/AppHeader';
import GlobalHeaderContainer from 'containers/GlobalHeaderContainer';
import browserHistory, { history } from 'utils/browserHistory';
import configureStore from './store';
import {
  routes as routeList,
  enabledRoutes,
  componentHelper,
  reducerHelper,
  sagaHelper,
} from './routes';

// import english from './translations/en.json';

const store = configureStore({}, browserHistory);

const createRoute = ({
  name,
  path,
  reducers,
  sagas,
}) => {
  reducers?.map((key) => (
    reducerHelper[key]().then((reducer) => store.injectReducer(key, reducer.default))
  ));
  sagas?.map((key) => (
    sagaHelper[key]().then((saga) => store.injectSaga(key, saga.default))
  ));
  const Element = lazy(componentHelper[name]);

  return (
    <Route
      exact
      key={name}
      path={path}
      name={name}
      element={<Element />}
    />
  );
};

// enabledRoutes is static so we don't need to generate  it on every render
const routes = enabledRoutes.map((name) => routeList[name]);


// const messages = {
//   en: english,
// }

export const App = () => {
  const locale = 'en';
  history.navigate = useNavigate();
  history.location = useLocation();

  // eslint-disable-next-line no-restricted-properties
  window.onpopstate = () => {
    // eslint-disable-next-line no-restricted-properties
    window.history.go(1);
  };

  return (
    // <IntlProvider locale={locale} messages={messages[locale]}>
    <IntlProvider locale={locale}>
      <Provider store={store}>
        <AppHeader>
          <GlobalHeaderContainer />
        </AppHeader>
        <div className="relativePosition">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes?.map((route) => createRoute(route))}
              <Route path="*" element={<div><p>No Route</p></div>} />
            </Routes>
          </Suspense>
          {/* <AppFooter /> */}
        </div>
      </Provider>
    </IntlProvider>
  );
};

export default App;
