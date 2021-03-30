import {inject, injectable} from 'inversify';
import {HttpManager} from '@Shared/networking';
import {PinsModel} from '../models/pins';
import {PinDetailModel} from '../models/pinDetail';

export interface PinRemoteDataSource {
  getPins(): Promise<PinsModel>;
  pin(id: number): Promise<PinDetailModel>;
}

@injectable()
export class PinRemoteDataSourceImpl implements PinRemoteDataSource {
  constructor(@inject('HttpManager') private http: HttpManager) {}

  async getPins(): Promise<PinsModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../__mocks__/pins.json'));
        }, 500),
      );
      return PinsModel.fromJSON({pins: response});
    } catch (e) {
      throw new Error('Failed fetch pins');
    }
  }

  async pin(id: number): Promise<PinDetailModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../__mocks__/item.json'));
        }, 500),
      );
      return PinDetailModel.fromJSON(response);
    } catch (e) {
      throw new Error(`Failed fetch pin detail ${id}`);
    }
  }
}
