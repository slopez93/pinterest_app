import React from 'react';

import {Text} from './styles';

type Props = {
  children: React.ReactNode;
};

function PinName({children}: Props) {
  return <Text>{children}</Text>;
}

export default PinName;
