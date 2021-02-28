import styled from 'styled-components/native';
import {Button} from 'react-native-elements';

export const ButtonStyled = styled(Button).attrs(
  ({bgColor, borderColor, textColor, pv, ph, mt, mb}) => ({
    buttonStyle: {
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: 1,
      paddingTop: pv,
      paddingBottom: pv,
      paddingLeft: ph,
      paddingRight: ph,
    },
    titleStyle: {
      color: textColor,
    },
    loadingProps: {
      size: 20,
    },
    containerStyle: {
      marginTop: mt,
      marginBottom: mb,
    },
  }),
)``;
