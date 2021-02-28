import React from 'react';

import {ButtonStyled} from './styles';

type InputProps = {
  testID?: string;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  bgColor: string;
  borderColor: string;
  textColor: string;
  pv: number;
  ph: number;
  mt: number;
  mb: number;
};

function Button({
  testID,
  title,
  disabled,
  loading,
  onPress,
  bgColor,
  borderColor,
  textColor,
  pv,
  ph,
  mt,
  mb,
}: InputProps) {
  return (
    <ButtonStyled
      testID={testID}
      title={title}
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      bgColor={bgColor}
      textColor={textColor}
      pv={pv}
      ph={ph}
      borderColor={borderColor}
      mt={mt}
      mb={mb}
    />
  );
}

Button.defaultProps = {
  mt: 0,
  mb: 0,
  pv: 12,
  ph: 15,
  bgColor: '#e60022',
  borderColor: 'transparent',
  textColor: '#fff',
};

export default Button;
