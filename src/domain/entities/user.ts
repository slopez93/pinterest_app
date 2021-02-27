import {Pin} from './pin';

export class User {
  private _name: string;
  private _token: string;
  private _pins: Pin[] = [];

  constructor(name: string, token: string, pins: Pin[]) {
    this._name = name;
    this._token = token;
    this._pins = pins;
  }

  static create(name: string, token: string, pins: Array<any>): User {
    // TODO: Move this name constructor to factory
    const pinsEntities = pins.map((pin) =>
      Pin.create(
        pin.id,
        pin.name,
        pin.thumbnail,
        pin.category,
        pin.color,
        pin.size,
      ),
    );
    return new User(name, token, pinsEntities);
  }

  public get name() {
    return this._name;
  }

  public get token() {
    return this._token;
  }

  public get pins() {
    return this._pins;
  }
}
