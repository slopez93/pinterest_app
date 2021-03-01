import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Arrow} from '../../assets/icons';

export const BackIcon = styled(Arrow)``;

export const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  scrollEventThrottle: 16,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 0;
  position: relative;
`;

export const Image = styled.Image`
  width: ${`${Dimensions.get('window').width}px`};
  height: ${`${Dimensions.get('window').height * 0.5}px`};
`;
