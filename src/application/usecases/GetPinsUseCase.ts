import {inject, injectable} from 'inversify';
import {PinRepository} from '@Domain/repositories/pinRepository';
import {GetPinsResponse} from './GetPinsResponse';

@injectable()
export class GetPinsUseCase {
  constructor(@inject('PinRepository') private repository: PinRepository) {}

  async execute(): Promise<GetPinsResponse> {
    try {
      const pins = await this.repository.allPins();
      return new GetPinsResponse(pins);
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
