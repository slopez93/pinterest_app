import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {fireEvent, render} from '@testing-library/react-native';

import Login from '@Screens/login';

describe('Test login screen', () => {
  const mockStore = {app: {}, auth: {}};
  const store = configureStore()(mockStore);

  test('should success render', () => {
    const WrapperComponent = ({children}) => (
      <Provider store={store}>{children}</Provider>
    );

    render(<Login />, {wrapper: WrapperComponent});
  });

  test('should success dispatch action when logIn', () => {
    store.dispatch = jest.fn();
    const mockEmail = 'test@test.com';
    const mockPassword = 'Test1234';
    const expectedAction = {
      payload: {email: mockEmail, password: mockPassword},
      type: 'auth/LOGIN',
    };

    const WrapperComponent = ({children}) => (
      <Provider store={store}>{children}</Provider>
    );

    const {getByTestId} = render(<Login />, {wrapper: WrapperComponent});

    fireEvent.changeText(getByTestId('email'), mockEmail);
    fireEvent.changeText(getByTestId('password'), mockPassword);
    fireEvent.press(getByTestId('loginButton'));

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  test('should fail when submit form and email is incorrect', () => {
    store.dispatch = jest.fn();
    const mockEmail = '';
    const mockPassword = 'Test1234';

    const WrapperComponent = ({children}) => (
      <Provider store={store}>{children}</Provider>
    );

    const {getByTestId} = render(<Login />, {wrapper: WrapperComponent});

    fireEvent.changeText(getByTestId('email'), mockEmail);
    fireEvent.changeText(getByTestId('password'), mockPassword);
    fireEvent.press(getByTestId('loginButton'));

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
