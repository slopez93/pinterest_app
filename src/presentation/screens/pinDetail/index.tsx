import React, {useState, useEffect} from 'react';
import {GetPinDetailUseCase} from '../../../application/usecases/GetPinDetailUseCase';
import {PinDetailModel} from '../../../infrastructure/models/pinDetail';
import {ICamera} from '../../../infrastructure/services/camera';
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

  const handleCamera = (): void => {
    const camera = serviceLocator.get<ICamera>('ICamera');
    camera.launchCamera(null, (response) => {
      // TODO: Do anything, add response.image to carrousel
      console.warn(response);
    });
  };

  return <View pinDetail={pinDetail} handleCamera={handleCamera} />;
}

export default PinDetail;
