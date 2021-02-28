import {inject, injectable} from 'inversify';
import {HttpManager} from '../../../shared/networking';
import {DiscoverModel} from '../../models/discover';
import {PinsModel} from '../../models/pins';

export interface UserRemoteDataSource {
  discover(): Promise<DiscoverModel>;

  pins(): Promise<PinsModel>;
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
}
