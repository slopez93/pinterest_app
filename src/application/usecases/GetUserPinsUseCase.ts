import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '@Infrastructure/datasources/user/userRemoteDataSource';

import {Pin, PinsModel} from '@Infrastructure/models/pins';

@injectable()
export class GetUserPinsUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(): Promise<Pin[]> {
    try {
      const response: PinsModel = await this.dataSource.pins();
      return response.pins;
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
