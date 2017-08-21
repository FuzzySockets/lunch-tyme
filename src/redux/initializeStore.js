import * as actionCreators from './actionCreators/actionCreators';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export const initializeStore = (restaurants) => {
  let store = createStore(rootReducer);
  store.dispatch(actionCreators.setInitialState({
    site: { restaurants }
  }));
  return store;
};
