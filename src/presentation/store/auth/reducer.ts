import {IActionCreator, IState} from '../types';

import {INITIAL_STATE} from './initialState';
import * as types from './types';

const reducer = (
  state: IState = INITIAL_STATE,
  action: IActionCreator,
): IState => {
  const {type, payload} = action;

  console.log(payload);

  switch (type) {
    case types.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
