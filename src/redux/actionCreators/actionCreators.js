import * as actions from '../actionTypeConstants';
import { getAction } from './getAction';

export const setInitialState = getAction(actions.SET_INITIAL_STATE);
export const setActiveRestaurant = getAction(actions.SET_ACTIVE_RESTAURANT);
export const toggleDetails = getAction(actions.TOGGLE_DETAILS);
