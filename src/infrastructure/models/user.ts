export class UserModel {
  public name: string;
  public token: string;

  constructor(name: string, token: string) {
    this.name = name;
    this.token = token;
  }

  static fromJSON(data: any): UserModel {
    return new UserModel(data.name, data.token);
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
