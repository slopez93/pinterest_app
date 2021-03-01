import React from 'react';
import Text from '../Text';

import {FlatListStyled, ItemBackground, Item, ItemContainer} from './styles';

function Collection({items, columns, handleItem}: any) {
  return (
    <FlatListStyled
      data={items}
      renderItem={({item}) => {
        return (
          <Item testID="gridViewItem" onPress={() => handleItem(item)}>
            <ItemBackground source={{uri: item.thumbnail}}>
              <ItemContainer>
                <Text>{item.name}</Text>
                <Text>{item.category}</Text>
              </ItemContainer>
            </ItemBackground>
          </Item>
        );
      }}
      numColumns={columns}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

Collection.defaultProps = {
  columns: 2,
};

export default Collection;
