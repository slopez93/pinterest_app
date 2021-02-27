import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  border-color: #ebebeb;
  border-radius: 5px;
  border-width: 1px;
  padding-horizontal: 5px;
  padding-vertical: 12px;
  font-size: 17px;
  font-weight: 500;
  margin-top: ${({mt}) => `${mt}px`};
  margin-bottom: ${({mb}) => `${mb}px`};
`;
