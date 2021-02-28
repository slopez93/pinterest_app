import {call, put, takeLatest} from 'redux-saga/effects';
import {GetDiscoverUseCase} from '../../../../application/usecases/GetDiscoverUseCase';
import {GetUserPinsUseCase} from '../../../../application/usecases/GetUserPinsUseCase';
import {serviceLocator} from '../../../../shared/config/di';
import {setIsLoading, setIsNotLoading} from '../../app/actions';
import {setDiscover, setPins} from '../../user/actions';
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

export function* pins() {
  try {
    const useCase = serviceLocator.get<GetUserPinsUseCase>(
      'GetUserPinsUseCase',
    );
    yield put(setIsLoading());
    const response = yield call([useCase, useCase.execute]);
    yield put(setPins(response));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsNotLoading());
  }
}

export function* watchUserSaga() {
  yield takeLatest(types.FETCH_PINS, pins);
  yield takeLatest(types.FETCH_DISCOVER, discover);
}
