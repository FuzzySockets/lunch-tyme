import _ from 'lodash';
import React from 'react';
import request from 'superagent';
import * as actionCreators from '../redux/actionCreators/actionCreators';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { WrapperContainer } from './wrapper/wrapper';
import { render } from 'react-dom';
import rootReducer from '../redux/reducers/rootReducer';
import '../styles/global.less';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

async function initialize() {

  let url = `http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json`;
  let { body } = await request.get(url)
  let store = createStore(rootReducer);

  store.dispatch(actionCreators.setInitialState({
    site: {
      restaurants: body.restaurants 
    }
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

  var root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  render(<App/>, document.getElementById('root'));
}

initialize();

