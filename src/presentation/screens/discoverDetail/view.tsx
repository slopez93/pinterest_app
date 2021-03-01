import React from 'react';
import {DiscoverDetailModel} from '../../../infrastructure/models/discoverDetail';
import {
  Button,
  Content,
  PinSlider,
  PinName,
  PinShare,
  PinPrice,
  PinSizes,
  PinDescription,
  PinCategory,
  View as ViewComponent,
  LoadingIndicator,
} from '../../components';

type Props = {
  discoverDetail: DiscoverDetailModel | undefined;
  hasSize: boolean;
  handleSize: (arg0: string) => void;
};

function View({discoverDetail, hasSize, handleSize}: Props) {
  if (!discoverDetail) {
    return (
      <ViewComponent flex={1} align="center" justify="center">
        <LoadingIndicator />
      </ViewComponent>
    );
  }

  // TODO: For price with currency, use case should return a entity discover and return
  // price format with currency (Tell dont ask principle)
  const {
    name,
    category,
    images,
    sizes,
    description,
    price,
    discountPrice,
  } = discoverDetail;

  return (
    <Content ml={0} mr={0}>
      <PinSlider images={images} />
      <ViewComponent mt={20} ml={20} mr={20}>
        <ViewComponent dir="row" justify="space-between">
          <PinName>{name}</PinName>
          <PinShare />
        </ViewComponent>
        <PinCategory>{category}</PinCategory>
        <PinPrice price={discountPrice} originalPrice={price} saving="50%" />
        <PinSizes sizes={sizes} onPress={handleSize} />
        <Button
          title="ORDER"
          textColor="#fff"
          bgColor="#000"
          mt={20}
          disabled={!hasSize}
          onPress={() => {}}
        />
        <PinDescription>{description}</PinDescription>
      </ViewComponent>
    </Content>
  );
}

export default View;
