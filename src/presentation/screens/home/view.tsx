import React from 'react';
import {User} from '../../../domain/entities/user';
import {Header, Content, Text} from '../../components';

import {UserWrapper} from './styles';

type Props = {
  user: User;
};

function View({user}: Props) {
  return (
    <Content>
      <Header />
      <UserWrapper>
        <Text size={27}>Hello</Text>
        <Text size={28}>{user.name}</Text>
      </UserWrapper>
    </Content>
  );
}

export default View;
