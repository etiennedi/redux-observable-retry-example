import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './ducks';
import SampleRequest from './SampleRequest';
import './styles.css';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(epicMiddleware),
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul className="navigation">
          <li>
            <NavLink
              activeClassName="active"
              to="/"
            >
              Retry-Example
            </NavLink>
          </li>
        </ul>
        <div className="content">
          <Route
            exact
            path="/"
            component={SampleRequest}
          />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app-root'),
);
