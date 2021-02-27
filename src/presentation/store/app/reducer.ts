import {IActionCreator, IState} from '../types';

import {INITIAL_STATE} from './initialState';
import * as types from './types';

const reducer = (
  state: IState = INITIAL_STATE,
  action: IActionCreator,
): IState => {
  const {type} = action;

  switch (type) {
    case types.SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.SET_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
