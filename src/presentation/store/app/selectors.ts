import {IState} from '../types';

export const isLoadingSelector = (state: IState): boolean =>
  state.app.isLoading;
