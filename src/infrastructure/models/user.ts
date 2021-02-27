export class UserModel {
  public name: string;
  public token: string;
  public pins: Array<object>;

  constructor(name: string, token: string, pins: Array<object>) {
    this.name = name;
    this.token = token;
    this.pins = pins;
  }

  static fromJSON(data: any): UserModel {
    return new UserModel(data.name, data.token, data.pins);
  }

  static fromArrayJSON(data: any): Array<UserModel> {
    return data.map((item: any) => UserModel.fromJSON(item));
  }

  toJSON(): object {
    return {
      name: this.name,
      token: this.token,
    };
  }
}
