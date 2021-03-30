import {call, put, takeLatest} from 'redux-saga/effects';
import {GetDiscoverUseCase} from '../../../../application/usecases/GetDiscoverUseCase';
import {serviceLocator} from '../../../../shared/config/di';
import {setIsLoading, setIsNotLoading} from '../../app/actions';
import {setDiscover} from '../../user/actions';
import * as types from '../../user/types';

export function* discover() {
  try {
    const useCase = serviceLocator.get<GetDiscoverUseCase>(
      'GetDiscoverUseCase',
    );
    yield put(setIsLoading());
    const response = yield call([useCase, useCase.execute]);
    yield put(setDiscover(response));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsNotLoading());
  }
}

export function* watchUserSaga() {
  yield takeLatest(types.FETCH_DISCOVER, discover);
}
