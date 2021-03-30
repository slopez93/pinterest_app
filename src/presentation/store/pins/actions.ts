import {IActionCreator} from '../types';
import * as types from './types';

export const fetchPins = (): IActionCreator => ({
  type: types.FETCH_PINS,
  payload: {},
});

export const fetchPinDetail = (id: number): IActionCreator => ({
  type: types.FETCH_PIN_DETAIL,
  payload: {id},
});

export const setPins = (data: object): IActionCreator => ({
  type: types.SET_PINS,
  payload: {data},
});

export const setPinDetail = (data: object): IActionCreator => ({
  type: types.SET_PIN_DETAIL,
  payload: {data},
});

export const clearPinDetail = (): IActionCreator => ({
  type: types.CLEAR_PIN_DETAIL,
  payload: {},
});
