import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '../../infrastructure/datasources/user/userRemoteDataSource';
import {DiscoverModel} from '../../infrastructure/models/discover';

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
