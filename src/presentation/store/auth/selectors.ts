import {User} from '../../../domain/entities/user';
import {IState} from '../types';

export const isLoggedInSelector = (state: IState): boolean =>
  state.auth.isLoggedIn;

export const userSelector = (state: IState): User => state.auth.user;
