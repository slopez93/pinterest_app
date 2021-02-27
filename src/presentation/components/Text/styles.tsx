import styled from 'styled-components/native';

export const TextStyled = styled.Text`
  margin-top: ${({mt}) => `${mt}px`};
  margin-bottom: ${({mb}) => `${mb}px`};
  color: ${({color}) => color};
  font-size: ${({size}) => size};
`;
