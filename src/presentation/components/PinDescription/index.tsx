import React from 'react';
import View from '../View';

import {Text} from './styles';

type Props = {
  children: React.ReactNode;
};

function PinDescription({children}: Props) {
  return (
    <View mt={20}>
      <Text bold mb={5}>
        Description
      </Text>
      <Text>{children}</Text>
    </View>
  );
}

export default PinDescription;
