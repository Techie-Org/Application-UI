import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

export const history = {
    navigate: null,
    location: null,
}

export default browserHistory;