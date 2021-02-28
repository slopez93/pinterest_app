export class User {
  private _name: string;
  private _token: string;
  // private _pins: Pin[] = [];

  constructor(name: string, token: string) {
    this._name = name;
    this._token = token;
  }

  static create(name: string, token: string): User {
    // TODO: Move this name constructor to factory
    return new User(name, token);
  }

  public get name() {
    return this._name;
  }

  public get token() {
    return this._token;
  }
}
