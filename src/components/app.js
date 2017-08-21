import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { WrapperContainer } from './wrapper/wrapper';
import { render } from 'react-dom';
import { getRestaurants } from '../api/restaurants';
import { initializeStore } from '../redux/initializeStore';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ROOT_ID, HOME_PATH } from '../config/constants';
import '../styles/global.less';

const mountRoot = (App) => {
  let root = document.createElement('div');
  root.id = ROOT_ID;
  document.body.appendChild(root);
  render(<App/>, document.getElementById(ROOT_ID));
}

async function initialize() {

  let store = initializeStore(await getRestaurants());

  const App = () => (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path={HOME_PATH} component={WrapperContainer}/>
        </div>
      </Router>
    </Provider>
   );
  
   mountRoot(App);
}

initialize();
