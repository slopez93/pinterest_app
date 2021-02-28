import {IActionCreator} from '../types';
import * as types from './types';

export const fetchDiscover = (): IActionCreator => ({
  type: types.FETCH_DISCOVER,
  payload: {},
});

export const setDiscover = (data: object): IActionCreator => ({
  type: types.SET_DISCOVER,
  payload: {data},
});

export const fetchPins = (): IActionCreator => ({
  type: types.FETCH_PINS,
  payload: {},
});

export const setPins = (data: object): IActionCreator => ({
  type: types.SET_PINS,
  payload: {data},
});
