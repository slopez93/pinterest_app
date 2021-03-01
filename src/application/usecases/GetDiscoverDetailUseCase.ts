import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '../../infrastructure/datasources/user/userRemoteDataSource';
import {DiscoverDetailModel} from '../../infrastructure/models/discoverDetail';

@injectable()
export class GetDiscoverDetailUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(id: string): Promise<DiscoverDetailModel> {
    try {
      return await this.dataSource.discoverDetail(id);
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
