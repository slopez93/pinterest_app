import React from 'react';

import {Text} from './styles';

type Props = {
  children: React.ReactNode;
};

function PinCategory({children}: Props) {
  return <Text>{children}</Text>;
}

export default PinCategory;
