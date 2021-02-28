import {Pressable} from 'react-native';
import styled from 'styled-components/native';

export const BoxSize = styled(Pressable)`
  align-items: center;
  justify-content: center;
  background: ${({selected}) => (selected ? '#e60022' : '#ebebeb')};
  width: 50px;
  height: 50px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: ${({selected}) => (selected ? '#fff' : '#000')};
`;
