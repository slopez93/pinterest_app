import React from 'react';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/auth/selectors';

import View from './view';

function HomeScreen() {
  const user = useSelector(userSelector);

  return <View user={user} />;
}

export default HomeScreen;
