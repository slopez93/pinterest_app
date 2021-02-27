import {call, put, takeLatest} from 'redux-saga/effects';
import {UserLoginUseCase} from '../../../../application/usecases/user/UserLoginUseCase';
import {User} from '../../../../domain/entities/user';
import {serviceLocator} from '../../../../shared/config/di';
import {setIsLoading, setIsNotLoading} from '../../app/actions';
import * as types from '../../auth/types';

export function* login(action) {
  try {
    const {email, password} = action.payload;
    const useCase = serviceLocator.get<UserLoginUseCase>('UserLoginUseCase');
    yield put(setIsLoading());
    const user: User = yield call([useCase, useCase.execute], email, password);
    console.warn(user);
    // yield put(loggedIn({}));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsNotLoading());
  }
}

export function* watchAuthSaga() {
  yield takeLatest(types.LOGIN, login);
}
