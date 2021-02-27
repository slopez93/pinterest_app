import {IActionCreator} from '../types';
import * as types from './types';

export const setIsLoading = (): IActionCreator => ({
  type: types.SET_IS_LOADING,
  payload: {},
});

export const setIsNotLoading = (): IActionCreator => ({
  type: types.SET_IS_NOT_LOADING,
  payload: {},
});
