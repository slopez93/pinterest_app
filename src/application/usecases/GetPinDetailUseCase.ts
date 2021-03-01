import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '@Infrastructure/datasources/user/userRemoteDataSource';
import {PinDetailModel} from '@Infrastructure/models/pinDetail';

@injectable()
export class GetPinDetailUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(id: number): Promise<PinDetailModel> {
    try {
      return await this.dataSource.pinDetail(id);
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
