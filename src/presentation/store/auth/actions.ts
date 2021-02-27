import {IActionCreator} from '../types';
import * as types from './types';

export const login = (email: string, password: string): IActionCreator => ({
  type: types.LOGIN,
  payload: {email, password},
});

export const loggedIn = (data: object): IActionCreator => ({
  type: types.LOGGED_IN,
  payload: {user: data},
});
