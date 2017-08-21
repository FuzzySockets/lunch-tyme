import _ from 'lodash';
import React from 'react';
import * as actionCreators from '../redux/actionCreators/actionCreators';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { WrapperContainer } from './wrapper/wrapper';
import { render } from 'react-dom';
import rootReducer from '../redux/reducers/rootReducer';
import { ROOT_ID } from '../config/constants';
import { getRestaurants } from '../api/restaurants';
import '../styles/global.less';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

async function initialize() {

  let restaurants = await getRestaurants();
  let store = createStore(rootReducer);

  store.dispatch(actionCreators.setInitialState({
    site: { restaurants }
  }));

  const App = () => (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={WrapperContainer}/>
        </div>
      </Router>
    </Provider>
   );

  let root = document.createElement('div');
  root.id = ROOT_ID;
  document.body.appendChild(root);
  render(<App/>, document.getElementById(ROOT_ID));
}

initialize();

