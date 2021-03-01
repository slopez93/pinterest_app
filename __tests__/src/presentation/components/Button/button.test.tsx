import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from '@Components/index';

test('Test button component and call callback when pressed', () => {
  const mockCallback = jest.fn();

  const {getByTestId} = render(
    <Button testID="button" title="test" onPress={mockCallback} />,
  );

  fireEvent.press(getByTestId('button'));

  expect(mockCallback).toHaveBeenCalled();
});
