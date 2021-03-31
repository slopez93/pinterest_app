import React from 'react';
import {PinDetailModel} from '@Infrastructure/models/pinDetail';
import {
  LoadingIndicator,
  Button,
  Content,
  PinSlider,
  PinName,
  PinShare,
  PinCategory,
  PinSizes,
  PinDescription,
  View as ViewComponent,
} from '@Components/index';

type Props = {
  pinDetail: PinDetailModel | undefined;
  handleCamera: () => void;
};

function View({pinDetail, handleCamera}: Props) {
  if (!pinDetail) {
    return (
      <ViewComponent flex={1} align="center" justify="center">
        <LoadingIndicator />
      </ViewComponent>
    );
  }

  const {name, category, images, sizes, size} = pinDetail;

  return (
    <Content safeAreaEdges={['bottom']} ml={0} mr={0}>
      <PinSlider images={images} />
      <ViewComponent mt={20} ml={20} mr={20}>
        <ViewComponent dir="row" justify="space-between">
          <PinName>{name}</PinName>
          <PinShare />
        </ViewComponent>
        <PinCategory>{category}</PinCategory>
        <PinSizes sizes={sizes} value={size} onPress={() => null} />
        <Button
          title="Take a picture"
          textColor="#000"
          bgColor="#fff"
          borderColor="#000"
          mt={20}
          onPress={handleCamera}
        />
        <PinDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </PinDescription>
      </ViewComponent>
    </Content>
  );
}

export default View;
