import React from 'react';
import Text from '../Text';

import {PinBackground, PinContainer} from './styles';

function PinCard({name, category, thumbnail}: any) {
  return (
    <PinBackground source={{uri: thumbnail}}>
      <PinContainer>
        <Text>{name}</Text>
        <Text>{category}</Text>
      </PinContainer>
    </PinBackground>
  );
}

export default PinCard;
