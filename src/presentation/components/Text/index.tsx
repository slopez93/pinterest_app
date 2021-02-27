import React from 'react';

import {TextStyled} from './styles';

type InputProps = {
  testID?: string;
  children: React.ReactNode;
  color?: string;
  fontFamily?: string;
  size?: number;
  mt?: number;
  mb?: number;
};

function Text({testID, children, color, size, fontFamily, mt, mb}: InputProps) {
  return (
    <TextStyled
      testID={testID}
      color={color}
      size={size}
      fontFamily={fontFamily}
      mt={mt}
      mb={mb}>
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  color: '#000',
  size: 16,
  mt: 0,
  mb: 0,
};

export default Text;
