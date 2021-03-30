import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICamera} from '@Infrastructure/services/camera';
import {clearPinDetail, fetchPinDetail} from '@Store/pins/actions';
import {pinDetailSelector} from '@Store/pins/selectors';
import {serviceLocator} from '@Shared/config/di';

import View from './view';

function PinDetail({route}) {
  const dispatch = useDispatch();
  const pinDetail = useSelector(pinDetailSelector);

  useEffect(() => {
    const id = route.params?.id;
    dispatch(fetchPinDetail(id));

    return () => {
      dispatch(clearPinDetail());
    };
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
