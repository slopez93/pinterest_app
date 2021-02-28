import React, {useState, useMemo} from 'react';
import {
  Button,
  Content,
  PinSlider,
  PinName,
  PinShare,
  PinPrice,
  PinSizes,
  PinDescription,
  View,
} from '../../components';

function DiscoverDetail() {
  const [size, setSize] = useState<string>();

  const hasSize = useMemo<boolean>(() => typeof size !== 'undefined', [size]);

  const handleSize = (val: string) => setSize(val);

  return (
    <Content ml={0} mr={0}>
      <PinSlider />
      <View mt={20} ml={20} mr={20}>
        <View dir="row" justify="space-between">
          <PinName>Name</PinName>
          <PinShare />
        </View>
        <PinPrice price={12.99} originalPrice={45.55} saving="50%" />
        <PinSizes onPress={handleSize} />
        <Button
          title="ORDER"
          textColor="#fff"
          bgColor="#000"
          mt={20}
          disabled={!hasSize}
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

export default DiscoverDetail;
