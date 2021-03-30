import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '@Infrastructure/datasources/userRemoteDataSource';
import {DiscoverDetailModel} from '@Infrastructure/models/discoverDetail';

@injectable()
export class GetDiscoverDetailUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(id: number): Promise<DiscoverDetailModel> {
    try {
      return await this.dataSource.discoverDetail(id);
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
