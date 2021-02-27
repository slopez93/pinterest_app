import styled from 'styled-components/native';
import {Button} from 'react-native-elements';

export const ButtonStyled = styled(Button).attrs(({mt, mb}) => ({
  buttonStyle: {
    backgroundColor: '#e60022',
    paddingTop: 12,
    paddingBottom: 12,
  },
  loadingProps: {
    size: 20,
  },
  containerStyle: {
    marginTop: mt,
    marginBottom: mb,
  },
}))``;
