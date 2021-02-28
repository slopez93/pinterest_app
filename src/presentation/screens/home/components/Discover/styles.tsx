import styled from 'styled-components/native';
import {Pressable} from 'react-native';

export const Content = styled.View``;

export const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  scrollEventThrottle: 16,
  pagingEnabled: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  margin-top: 5px;
`;

export const HighlightItem = styled(Pressable)`
  width: 220px;
  margin-right: 30px;
`;

export const Categories = styled.View`
  margin-top: 30px;
`;

export const Highlight = styled.View``;

export const Category = styled.View`
  margin-top: 15px;
`;
