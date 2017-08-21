import _ from 'lodash';
import { Map, fromJS } from 'immutable';
import * as actionTypes from '../actionTypeConstants'; 

function getInitialState(site = {}) {
  return fromJS({
    restaurant: site.restaurants[0],
    restaurants: site.restaurants,
    detailsVisible: false
  });
} 

export default function siteReducer(state = Map(), action) {

  let { payload } = action;
  
  switch (action.type) {

    case actionTypes.SET_INITIAL_STATE:
      return getInitialState(payload.site);

    case actionTypes.SET_ACTIVE_RESTAURANT:
      return state.set('activeRestaurant', payload);

    case actionTypes.TOGGLE_DETAILS:
      return state.set('detailsVisible', !state.get('detailsVisible'));

    default:
      return state;
  }
}
