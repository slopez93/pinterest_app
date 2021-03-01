import React from 'react';

import {ScrollView, Image} from './styles';

type Props = {
  images: Array<string>;
};

function PinSlider({images}: Props) {
  return (
    <ScrollView>
      {images?.map((img, key) => (
        <Image key={key} source={{uri: img}} />
      ))}
    </ScrollView>
  );
}

export default PinSlider;
