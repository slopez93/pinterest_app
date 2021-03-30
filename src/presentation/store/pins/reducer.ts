import {IActionCreator, IState} from '../types';

import {INITIAL_STATE} from './initialState';
import * as types from './types';

const reducer = (
  state: IState = INITIAL_STATE,
  action: IActionCreator,
): IState => {
  const {type, payload} = action;

  switch (type) {
    case types.SET_PINS:
      return {
        ...state,
        pins: payload.data,
      };
    case types.SET_PIN_DETAIL:
      return {
        ...state,
        pinDetail: payload.data,
      };
    case types.CLEAR_PIN_DETAIL:
      return {
        ...state,
        pinDetail: null,
      };
    default:
      return state;
  }
};

export default reducer;
