import {call, put, takeLatest} from 'redux-saga/effects';
import {AuthLoginUseCase} from '../../../../application/usecases/AuthLoginUseCase';
import {User} from '../../../../domain/entities/user';
import {serviceLocator} from '../../../../shared/config/di';
import {setIsLoading, setIsNotLoading} from '../../app/actions';
import {loggedIn} from '../../auth/actions';
import * as types from '../../auth/types';

export function* login(action) {
  try {
    const {email, password} = action.payload;
    const useCase = serviceLocator.get<AuthLoginUseCase>('AuthLoginUseCase');
    yield put(setIsLoading());
    const user: User = yield call([useCase, useCase.execute], email, password);
    yield put(loggedIn(user.toJSON()));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsNotLoading());
  }
}

export function* watchAuthSaga() {
  yield takeLatest(types.LOGIN, login);
}
