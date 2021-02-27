import React from 'react';

import {ButtonStyled} from './styles';

type InputProps = {
  testID?: string;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  mt?: number;
  mb?: number;
};

function Button({
  testID,
  title,
  disabled,
  loading,
  onPress,
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
      mt={mt}
      mb={mb}
    />
  );
}

Button.defaultProps = {
  mt: 0,
  mb: 0,
};

export default Button;
