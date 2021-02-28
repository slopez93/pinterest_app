import {inject, injectable} from 'inversify';
import {Pin} from '../../domain/entities/pin';
import {UserRemoteDataSource} from '../../infrastructure/datasources/user/userRemoteDataSource';

import {PinsModel} from '../../infrastructure/models/pins';

@injectable()
export class GetUserPinsUseCase {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async execute(): Promise<Pin[]> {
    try {
      const response: PinsModel = await this.dataSource.pins();
      return response.pins.map((pin) =>
        Pin.create(
          pin.id,
          pin.name,
          pin.thumbnail,
          pin.category,
          pin.category,
          pin.size || '',
        ),
      );
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
