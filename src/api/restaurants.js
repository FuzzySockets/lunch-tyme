import request from 'superagent';
import { API_URL } from '../config/constants';

export const getRestaurants = async () => {
  let { body } = await request.get(API_URL);
  return body.restaurants;
};
