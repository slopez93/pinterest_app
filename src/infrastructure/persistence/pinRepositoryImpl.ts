import {inject, injectable} from 'inversify';
import {PinRepository} from '@Domain/repositories/pinRepository';
import {Pin} from '@Domain/entities/pin';
import {PinRemoteDataSource} from '../datasources/pinRemoteDataSource';

@injectable()
export class PinRepositoryImpl implements PinRepository {
  constructor(
    @inject('PinRemoteDataSource') private datasource: PinRemoteDataSource,
  ) {}

  async pin(id: number): Promise<Pin> {
    const response = await this.datasource.pin(id);
    return Pin.create({
      id: response.id.toString(),
      name: response.name,
      thumbnail: response.thumbnail,
      images: response.images,
      sizes: response.sizes,
      category: response.category,
      color: response.color,
      size: response.size,
    });
  }

  async allPins(): Promise<Pin[]> {
    const response = await this.datasource.getPins();
    return response.pins.map(({id, name, thumbnail, category, color, size}) =>
      Pin.create({id, name, thumbnail, category, color, size}),
    );
  }
}
