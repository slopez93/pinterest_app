import React from 'react';
import {
  Button,
  Content,
  PinSlider,
  PinName,
  PinShare,
  PinCategory,
  PinSizes,
  PinDescription,
  View,
} from '../../components';

function PinDetail() {
  return (
    <Content ml={0} mr={0}>
      <PinSlider />
      <View mt={20} ml={20} mr={20}>
        <View dir="row" justify="space-between">
          <PinName>Name</PinName>
          <PinShare />
        </View>
        <PinCategory>Category</PinCategory>
        <PinSizes value="M" onPress={() => null} />
        <Button
          title="Take a picture"
          textColor="#000"
          bgColor="#fff"
          borderColor="#000"
          mt={20}
          onPress={() => {}}
        />
        <PinDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </PinDescription>
      </View>
    </Content>
  );
}

export default PinDetail;
