import React, {useState, useEffect, useMemo} from 'react';
import {GetDiscoverDetailUseCase} from '@Application/usecases/GetDiscoverDetailUseCase';
import {DiscoverDetailModel} from '@Infrastructure/models/discoverDetail';
import {serviceLocator} from '@Shared/config/di';

import View from './view';

function DiscoverDetail({route}) {
  const [discoverDetail, setDiscoverDetail] = useState<DiscoverDetailModel>();

  useEffect(() => {
    // TODO: Example call use case directly in view
    async function fetch() {
      const useCase = serviceLocator.get<GetDiscoverDetailUseCase>(
        'GetDiscoverDetailUseCase',
      );
      const response = await useCase.execute(route.params?.id);
      setDiscoverDetail(response);
    }
    fetch();
  }, []);

  const [size, setSize] = useState<string>();

  const hasSize = useMemo<boolean>(() => typeof size !== 'undefined', [size]);

  const handleSize = (val: string) => setSize(val);

  return (
    <View
      discoverDetail={discoverDetail}
      hasSize={hasSize}
      handleSize={handleSize}
    />
  );
}

export default DiscoverDetail;
