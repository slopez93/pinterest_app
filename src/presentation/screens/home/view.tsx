import React from 'react';
import {User} from '../../../domain/entities/user';
import {Header, Content, Text} from '../../components';

import {Pins, Discover} from './components';

import {UserWrapper, Container, TabView, TabViewText} from './styles';

type Props = {
  tabs: Array<any>;
  user: User;
  tabSelected: string;
  handleTabView: any;
};

function View({tabs, user, tabSelected, handleTabView}: Props) {
  return (
    <Content mr={5} ml={5}>
      <Header />
      <UserWrapper>
        <Text size={27}>Hello</Text>
        <Text fontFamily="Peacelove" size={33}>
          {user.name}
        </Text>
      </UserWrapper>
      <TabView>
        {tabs.map(({id, title}) => (
          <TabViewText
            key={id}
            selected={tabSelected === id}
            onPress={() => handleTabView(id)}>
            {title}
          </TabViewText>
        ))}
      </TabView>
      <Container>
        {tabSelected === 'pins' && <Pins />}
        {tabSelected === 'discover' && <Discover />}
      </Container>
    </Content>
  );
}

export default View;
