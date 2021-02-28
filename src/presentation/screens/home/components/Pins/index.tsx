import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Pin} from '../../../../../domain/entities/pin';
import {isLoadingSelector} from '../../../../store/app/selectors';
import {fetchPins} from '../../../../store/user/actions';
import {pinsSelector} from '../../../../store/user/selectors';

import {GridView, LoadingIndicator} from '../../../../components';

import {Content} from './styles';
import {routes} from '../../../../../shared/config/routes';

function Discover() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const pins = useSelector(pinsSelector);

  useEffect(() => {
    dispatch(fetchPins());
  }, [dispatch]);

  const handleItem = (pin: Pin): void =>
    navigation.navigate(routes.pinDetail, {id: pin.id});

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Content>
      <GridView items={pins} handleItem={handleItem} />
    </Content>
  );
}

export default Discover;
