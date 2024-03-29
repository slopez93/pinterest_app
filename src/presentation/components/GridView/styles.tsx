import styled from 'styled-components/native';
import {Pressable} from 'react-native';

export const FlatListStyled = styled.FlatList`
  flex: 1;
  flex-direction: column;
`;

export const Item = styled(Pressable)`
  flex: 1;
  flex-direction: column;
  margin-vertical: 10px;
  margin-horizontal: 10px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const ItemBackground = styled.ImageBackground`
  height: 210px;
`;
