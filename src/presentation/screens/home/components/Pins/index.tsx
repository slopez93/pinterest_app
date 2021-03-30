import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Pin} from '@Domain/entities/pin';
import {isLoadingSelector} from '@Store/app/selectors';
import {fetchPins} from '@Store/pins/actions';
import {pinsSelector} from '@Store/pins/selectors';
import {routes} from '@Shared/config/routes';

import {GridView, LoadingIndicator} from '@Components/index';

import {Content} from './styles';

function Discover() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const pins = useSelector(pinsSelector);

  useEffect(() => {
    dispatch(fetchPins());
  }, []);

  const handleItem = (pin: Pin): void =>
    navigation.navigate(routes.pinDetail, {id: pin.id});

  if (!pins && isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Content>
      <GridView items={pins} handleItem={handleItem} />
    </Content>
  );
}

export default Discover;
