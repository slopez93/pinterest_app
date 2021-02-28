import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SafeAreaViewStyled = styled(SafeAreaView)`
  flex: 1;
`;

export const KeyboardScrollView = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})``;
export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;

export const Wrapper = styled.View`
  flex: 1;
  margin-right: ${({mr}) => `${mr}px`};
  margin-left: ${({ml}) => `${ml}px`};
  margin-bottom: 20px;
`;
