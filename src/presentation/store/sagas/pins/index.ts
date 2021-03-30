import {call, put, takeLatest} from 'redux-saga/effects';
import {GetPinDetailUseCase} from '~/application/usecases/GetPinDetailUseCase';
import {GetPinsUseCase} from '../../../../application/usecases/GetPinsUseCase';
import {serviceLocator} from '../../../../shared/config/di';
import {setIsLoading, setIsNotLoading} from '../../app/actions';
import {setPinDetail, setPins} from '../../pins/actions';
import * as types from '../../pins/types';

export function* pins() {
  try {
    const useCase = serviceLocator.get<GetPinsUseCase>('GetPinsUseCase');
    yield put(setIsLoading());
    const response = yield call([useCase, useCase.execute]);
    yield put(setPins(response.pins));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsNotLoading());
  }
}

export function* pinDetail(action) {
  try {
    const {id} = action.payload;
    const useCase = serviceLocator.get<GetPinDetailUseCase>(
      'GetPinDetailUseCase',
    );
    yield put(setIsLoading());
    const response = yield call([useCase, useCase.execute], id);
    yield put(setPinDetail(response));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsNotLoading());
  }
}

export function* watchPinsSaga() {
  yield takeLatest(types.FETCH_PINS, pins);
  yield takeLatest(types.FETCH_PIN_DETAIL, pinDetail);
}
