import {IActionCreator, IState} from '../types';

import {INITIAL_STATE} from './initialState';
import * as types from './types';

const reducer = (
  state: IState = INITIAL_STATE,
  action: IActionCreator,
): IState => {
  const {type, payload} = action;

  switch (type) {
    case types.SET_DISCOVER:
      return {
        ...state,
        discover: payload.data,
      };
    case types.SET_PINS:
      return {
        ...state,
        pins: payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
