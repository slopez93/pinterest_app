import styled from 'styled-components/native';

export const ViewStyled = styled.View`
  ${({flex}) =>
    flex &&
    `
        flex: ${flex}
      `};
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  flex-direction: ${({dir}) => dir};
  margin-top: ${({mt}) => `${mt}px`};
  margin-bottom: ${({mb}) => `${mb}px`};
  margin-left: ${({ml}) => `${ml}px`};
  margin-right: ${({mr}) => `${mr}px`};
`;
