import React, {useState} from 'react';
import View from '../View';
import {BoxSize, Text} from './styles';

type Props = {
  sizes: Array<string>;
  value?: string;
  onPress: (arg0: string) => void;
};

function PinSizes({sizes, value, onPress}: Props) {
  const [size, setSize] = useState<string | undefined>(value);

  const isSelected = (val: string) => val === size;

  const handlePress = (val: string): void => {
    setSize(val);
    onPress(val);
  };

  return (
    <View dir="row" align="center" justify="space-between" mt={20}>
      {sizes.map((item: string) => (
        <BoxSize
          key={item}
          selected={isSelected(item)}
          onPress={() => handlePress(item)}>
          <Text selected={isSelected(item)}>{item}</Text>
        </BoxSize>
      ))}
    </View>
  );
}

export default PinSizes;
