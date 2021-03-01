import {inject, injectable} from 'inversify';
import {UserRemoteDataSource} from '../../infrastructure/datasources/user/userRemoteDataSource';
import {PinDetailModel} from '../../infrastructure/models/pinDetail';

@injectable()
export class GetPinDetailUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(id: string): Promise<PinDetailModel> {
    try {
      return await this.dataSource.pinDetail(id);
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
