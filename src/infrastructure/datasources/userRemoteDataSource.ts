import {inject, injectable} from 'inversify';
import {HttpManager} from '@Shared/networking';
import {DiscoverModel} from '@Infrastructure/models/discover';
import {DiscoverDetailModel} from '@Infrastructure/models/discoverDetail';

export interface UserRemoteDataSource {
  discover(): Promise<DiscoverModel>;
  discoverDetail(id: number): Promise<DiscoverDetailModel>;
}

@injectable()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
  constructor(@inject('HttpManager') private http: HttpManager) {}

  async discover(): Promise<DiscoverModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../__mocks__/discover.json'));
        }, 500),
      );
      return DiscoverModel.fromJSON(response);
    } catch (e) {
      throw new Error('Failed fetch discover');
    }
  }

  async discoverDetail(id: number): Promise<DiscoverDetailModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('../__mocks__/discover-item.json'));
        }, 500),
      );
      return DiscoverDetailModel.fromJSON(response);
    } catch (e) {
      throw new Error(`Failed fetch discover detail ${id}`);
    }
  }
}
