import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/auth/selectors';

import View from './view';

const TABS = [
  {id: 'pins', title: 'YOUR PINS'},
  {id: 'discover', title: 'DISCOVER'},
];

function HomeScreen() {
  const user = useSelector(userSelector);
  const [tabView, setTabView] = useState<string>(TABS[0].id);

  const handleTabView = (tabId: string): void => setTabView(tabId);

  return (
    <View
      tabs={TABS}
      user={user}
      tabSelected={tabView}
      handleTabView={handleTabView}
    />
  );
}

export default HomeScreen;
