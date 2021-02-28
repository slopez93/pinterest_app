import styled from 'styled-components/native';

export const UserWrapper = styled.View`
  align-items: center;
`;

export const Container = styled.View`
  margin-top: 30px;
`;

export const TabView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
  justify-content: space-around;
`;

export const TabViewText = styled.Text`
  font-size: 19px;
  font-weight: ${({selected}) => (selected ? 700 : 200)};
  text-decoration: ${({selected}) => (selected ? 'underline' : 'none')};
  margin-left: ${({ml}) => ml || 0};
`;
