import React from 'react';

import {ScrollView, Image} from './styles';

const IMAGES = [
  'https://plchldr.co/i/144x196?&bg=eee&fc=Ccc&text=IMAGE',
  'https://plchldr.co/i/144x196?&bg=eee&fc=Ccc&text=IMAGE',
  'https://plchldr.co/i/144x196?&bg=eee&fc=Ccc&text=IMAGE',
];

function PinSlider() {
  return (
    <ScrollView>
      {IMAGES.map((img, key) => (
        <Image key={key} source={{uri: img}} />
      ))}
    </ScrollView>
  );
}

export default PinSlider;
