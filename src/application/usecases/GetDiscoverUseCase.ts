import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '@Infrastructure/datasources/user/userRemoteDataSource';
import {DiscoverModel} from '@Infrastructure/models/discover';

@injectable()
export class GetDiscoverUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(): Promise<DiscoverModel> {
    try {
      return await this.dataSource.discover();
    } catch (error) {
      throw new Error(`Error fetch discover: ${error.message}`);
    }
  }
}
