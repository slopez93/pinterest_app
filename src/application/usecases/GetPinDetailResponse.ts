import {Pin} from '@Domain/entities/pin';

export class GetPinDetailResponse {
  readonly id: string;
  readonly name: string;
  readonly images: Array<string>;
  readonly sizes: Array<string>;
  readonly category: string;
  readonly color: string;
  readonly size: string;

  constructor(pin: Pin) {
    this.id = pin.id;
    this.name = pin.name;
    this.images = pin.images;
    this.sizes = pin.sizes;
    this.category = pin.category;
    this.size = pin.size;
    this.color = pin.color;
  }
}
