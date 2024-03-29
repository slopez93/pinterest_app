import {inject, injectable} from 'inversify';
import {PinRepository} from '@Domain/repositories/pinRepository';
import {GetPinDetailResponse} from './GetPinDetailResponse';

@injectable()
export class GetPinDetailUseCase {
  constructor(@inject('PinRepository') private repository: PinRepository) {}

  async execute(id: number): Promise<GetPinDetailResponse> {
    try {
      const pin = await this.repository.pin(id);
      return new GetPinDetailResponse(pin);
    } catch (error) {
      throw new Error(`Error fetch pins: ${error.message}`);
    }
  }
}
