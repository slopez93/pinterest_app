import {IState} from '../types';

export const isLoggedInSelector = (state: IState): boolean =>
  state.auth.isLoggedIn;
