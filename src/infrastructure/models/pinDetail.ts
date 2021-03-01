export class PinDetailModel {
  public id: number;
  public name: string;
  public category: string;
  public images: Array<string>;
  public size: string;
  public sizes: Array<string>;

  constructor(
    id: number,
    name: string,
    category: string,
    images: Array<string>,
    size: string,
    sizes: Array<string>,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.images = images;
    this.size = size;
    this.sizes = sizes;
  }

  static fromJSON(data: any): PinDetailModel {
    return new PinDetailModel(
      data.id,
      data.name,
      data.category,
      data.images,
      data.size,
      data.sizes,
    );
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      images: this.images,
      size: this.size,
      sizes: this.sizes,
    };
  }
}
