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
  margin-right: 20px;
  margin-left: 20px;
`;
