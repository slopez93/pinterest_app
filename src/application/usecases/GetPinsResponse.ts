import {Pin} from '@Domain/entities/pin';

export class GetPinsResponse {
  readonly pins: Pin[];

  constructor(pins: Pin[]) {
    this.pins = pins;
  }
}
