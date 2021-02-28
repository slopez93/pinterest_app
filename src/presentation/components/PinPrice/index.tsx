import React from 'react';
import View from '../View';

import {Text, OriginalPriceText, SavingText} from './styles';

type Props = {
  price: number;
  originalPrice?: number;
  saving?: string;
};

function PinPrice({price, originalPrice, saving}: Props) {
  return (
    <View dir="row" align="center">
      {originalPrice && <OriginalPriceText>{originalPrice}$</OriginalPriceText>}
      <Text>{price}$</Text>
      {saving && <SavingText>(save {saving})</SavingText>}
    </View>
  );
}

export default PinPrice;
