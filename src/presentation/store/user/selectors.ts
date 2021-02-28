import {IState} from '../types';

export const pinsSelector = (state: IState) => state.user.pins;

export const discoverSelector = (state: IState) => state.user.discover;
