import _ from 'lodash';
import { Map, fromJS } from 'immutable';
import * as actionTypes from '../actionTypeConstants'; 

const DETAILS_VISIBLE_FLAG = 'detailsVisible';

function getInitialState(site = {}) {
  return fromJS({
    restaurant: site.restaurants[0],
    restaurants: site.restaurants,
    [DETAILS_VISIBLE_FLAG]: false
  });
} 

export default function siteReducer(state = Map(), action) {

  let { payload } = action;
  
  switch (action.type) {

    case actionTypes.SET_INITIAL_STATE:
      return getInitialState(payload.site);

    case actionTypes.SET_ACTIVE_RESTAURANT:
      return state.set('restaurant', payload);

    case actionTypes.TOGGLE_DETAILS:
      return state.set(
        DETAILS_VISIBLE_FLAG, 
        !state.get(DETAILS_VISIBLE_FLAG)
      );

    default:
      return state;
  }
}
