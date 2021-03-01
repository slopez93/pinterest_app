import React, {useState, useEffect} from 'react';
import {GetPinDetailUseCase} from '../../../application/usecases/GetPinDetailUseCase';
import {PinDetailModel} from '../../../infrastructure/models/pinDetail';
import {serviceLocator} from '../../../shared/config/di';

import View from './view';

function PinDetail({route}) {
  const [pinDetail, setPinDetail] = useState<PinDetailModel>();

  useEffect(() => {
    // TODO: Moving this in a VM using MVVM patter
    async function fetch() {
      const useCase = serviceLocator.get<GetPinDetailUseCase>(
        'GetPinDetailUseCase',
      );
      const response = await useCase.execute(route.params?.id);
      setPinDetail(response);
    }
    fetch();
  }, []);

  return <View pinDetail={pinDetail} />;
}

export default PinDetail;
