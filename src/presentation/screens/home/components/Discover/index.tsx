import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isLoadingSelector} from '../../../../store/app/selectors';
import {fetchDiscover} from '../../../../store/user/actions';
import {discoverSelector} from '../../../../store/user/selectors';

import {
  GridView,
  LoadingIndicator,
  PinCard,
  Text,
} from '../../../../components';

import {
  Content,
  ScrollView,
  HighlightItem,
  Categories,
  Category,
  Highlight,
} from './styles';

function Discover() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const discover = useSelector(discoverSelector);

  useEffect(() => {
    dispatch(fetchDiscover());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Content>
      <Highlight>
        <Text>{discover.highlight?.name}</Text>
        <ScrollView>
          {discover.highlight?.pins.map((pin) => (
            <HighlightItem key={pin.id}>
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
        {discover.categories?.map(({id, name, pins}) => (
          <Category key={id}>
            <Text>{name}</Text>
            <GridView items={pins} />
          </Category>
        ))}
      </Categories>
    </Content>
  );
}

export default Discover;
