type Pin = {
  id: string;
  thumbnail: string;
  name: string;
  category: string;
  color: string;
  size?: string;
};

export class PinsModel {
  public pins: Array<Pin>;

  constructor(pins: Array<Pin>) {
    this.pins = pins;
  }

  static fromJSON(data: any): PinsModel {
    return new PinsModel(data.pins);
  }

  toJSON(): object {
    return {
      pins: this.pins,
    };
  }
}
