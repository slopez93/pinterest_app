import {Pin} from '@Domain/entities/pin';

export interface PinRepository {
  allPins(): Promise<Pin[]>;
  pin(id: number): Promise<Pin>;
}
