/* eslint-disable @typescript-eslint/no-unused-vars */
import {inject, injectable} from 'inversify';
import {HttpManager} from '@Shared/networking';
import {DiscoverModel} from '../../models/discover';
import {DiscoverDetailModel} from '../../models/discoverDetail';
import {PinDetailModel} from '../../models/pinDetail';
import {PinsModel} from '../../models/pins';

export interface UserRemoteDataSource {
  discover(): Promise<DiscoverModel>;
  pins(): Promise<PinsModel>;
  pinDetail(id: number): Promise<PinDetailModel>;
  discoverDetail(id: number): Promise<DiscoverDetailModel>;
}

@injectable()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
  constructor(@inject('HttpManager') private http: HttpManager) {}

  async discover(): Promise<DiscoverModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../../__mocks__/discover.json'));
        }, 500),
      );
      return DiscoverModel.fromJSON(response);
    } catch (e) {
      throw new Error('Failed fetch discover');
    }
  }

  async pins(): Promise<PinsModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../../__mocks__/pins.json'));
        }, 500),
      );
      return PinsModel.fromJSON({pins: response});
    } catch (e) {
      throw new Error('Failed fetch pins');
    }
  }

  async pinDetail(id: number): Promise<PinDetailModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../../__mocks__/item.json'));
        }, 500),
      );
      return PinDetailModel.fromJSON(response);
    } catch (e) {
      throw new Error(`Failed fetch pin detail ${id}`);
    }
  }

  async discoverDetail(id: number): Promise<DiscoverDetailModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../../__mocks__/discover-item.json'));
        }, 500),
      );
      return DiscoverDetailModel.fromJSON(response);
    } catch (e) {
      throw new Error(`Failed fetch discover detail ${id}`);
    }
  }
}
