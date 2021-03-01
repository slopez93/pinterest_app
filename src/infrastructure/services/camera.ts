import {injectable} from 'inversify';
import {
  CameraOptions,
  ImagePickerResponse,
  launchCamera,
} from 'react-native-image-picker';

type CameraCallback = (response: ImagePickerResponse) => any;

export interface ICamera {
  launchCamera(options: CameraOptions | null, callback: CameraCallback): void;
}

@injectable()
export class CameraImpl implements ICamera {
  launchCamera(options: CameraOptions, callback: CameraCallback): void {
    launchCamera(options, callback);
  }
}
