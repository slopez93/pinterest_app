import {inject, injectable} from 'inversify';
import {HttpManager} from '../../../shared/networking';
import {UserModel} from '../../models/user';

export interface UserRemoteDataSource {
  login(email: string, password: string): Promise<UserModel>;
}

@injectable()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
  constructor(@inject('HttpManager') private http: HttpManager) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(email: string, password: string): Promise<UserModel> {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(require('./login.json'));
        }, 500),
      );
      return UserModel.fromJSON(response);
    } catch (e) {
      throw new Error('Failed to get user');
    }
  }
}
