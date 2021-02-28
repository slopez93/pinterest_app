import React, {useState} from 'react';
import View from '../View';
import {BoxSize, Text} from './styles';
import {SIZES} from '../../../shared/config/constants';

type Props = {
  value?: string;
  onPress: (arg0: string) => void;
};

function PinSizes({value, onPress}: Props) {
  const [size, setSize] = useState<string | undefined>(value);

  const isSelected = (val: string) => val === size;

  const handlePress = (val: string): void => {
    setSize(val);
    onPress(val);
  };

  return (
    <View dir="row" align="center" justify="space-between" mt={20}>
      {SIZES.map((item: string) => (
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
