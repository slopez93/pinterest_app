import {sagaMiddleware} from '../middlewares';
import * as sagas from './index';

export const intitSagas = () =>
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
