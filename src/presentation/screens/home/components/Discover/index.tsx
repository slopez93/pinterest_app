import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Pin} from '@Domain/entities/pin';
import {isLoadingSelector} from '@Store/app/selectors';
import {fetchDiscover} from '@Store/user/actions';
import {discoverSelector} from '@Store/user/selectors';
import {routes} from '@Shared/config/routes';

import {GridView, LoadingIndicator, PinCard, Text} from '@Components/index';

import {
  Content,
  ScrollView,
  HighlightItem,
  Categories,
  Category,
  Highlight,
} from './styles';

function Discover() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const discover = useSelector(discoverSelector);

  useEffect(() => {
    dispatch(fetchDiscover());
  }, []);

  const handleItem = (pin: Pin): void =>
    navigation.navigate(routes.discoverDetail, {id: pin.id});

  // TODO: Create a sagaStatus selector for catch when is saga is loading, done and finish
  if (!discover && isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Content>
      <Highlight>
        <Text>{discover?.highlight?.name}</Text>
        <ScrollView>
          {discover?.highlight?.pins.map((pin) => (
            <HighlightItem key={pin.id} onPress={handleItem}>
              <PinCard
                name={pin.name}
                category={pin.category}
                thumbnail={pin.thumbnail}
              />
            </HighlightItem>
          ))}
        </ScrollView>
      </Highlight>
      <Categories>
        {discover?.categories?.map(({id, name, pins}) => (
          <Category key={id}>
            <Text>{name}</Text>
            <GridView items={pins} handleItem={handleItem} />
          </Category>
        ))}
      </Categories>
    </Content>
  );
}

export default Discover;
