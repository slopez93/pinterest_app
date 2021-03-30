import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {render, fireEvent} from '@testing-library/react-native';

import Home from '@Screens/home';

const mockNavigation = {navigate: jest.fn()};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Test login screen', () => {
  const mockPins = [
    {id: 1, name: 'pin1'},
    {id: 2, name: 'pin2'},
  ];
  const mockStore = {
    app: {},
    auth: {user: {name: 'Marta'}},
    pins: {pins: mockPins},
  };
  const store = configureStore()(mockStore);

  test('should success render', () => {
    const WrapperComponent = ({children}) => (
      <Provider store={store}>{children}</Provider>
    );

    render(<Home />, {wrapper: WrapperComponent});
  });

  test('should success and dispatch fetch pins actions', () => {
    store.dispatch = jest.fn();
    const expectedAction = {payload: {}, type: 'pins/FETCH_PINS'};

    const WrapperComponent = ({children}) => (
      <Provider store={store}>{children}</Provider>
    );

    render(<Home />, {wrapper: WrapperComponent});

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  test('navigate to pin detail', async () => {
    store.dispatch = jest.fn();

    const WrapperComponent = ({children}) => (
      <Provider store={store}>{children}</Provider>
    );

    const {getAllByTestId} = render(<Home />, {wrapper: WrapperComponent});

    fireEvent.press(getAllByTestId('gridViewItem')[0]);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('PinDetail', {id: 1});
  });

  // TODO: Add another test for discover tab
});
