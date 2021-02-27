import React from 'react';

import {StyledTextInput} from './styles';

type InputProps = {
  testID?: string;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  onChange: (arg0: string) => void;
  mt?: number;
  mb?: number;
};

function TextInput({
  testID,
  placeholder,
  value,
  secureTextEntry,
  onChange,
  mt,
  mb,
}: InputProps) {
  return (
    <StyledTextInput
      testID={testID}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={secureTextEntry}
      mt={mt}
      mb={mb}
    />
  );
}

TextInput.defaultProps = {
  secureTextEntry: false,
  mt: 0,
  mb: 0,
};

export default TextInput;
