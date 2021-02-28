import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 17px;
  font-weight: ${({bold}) => (bold ? 700 : 200)};
`;
