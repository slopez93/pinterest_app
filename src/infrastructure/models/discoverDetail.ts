export class DiscoverDetailModel {
  public id: number;
  public name: string;
  public category: string;
  public description: string;
  public images: Array<string>;
  public sizes: Array<string>;
  public availableSizes: Array<string>;
  public price: number;
  public discountPrice: number;
  public currency: string;

  constructor(
    id: number,
    name: string,
    category: string,
    description: string,
    images: Array<string>,
    sizes: Array<string>,
    availableSizes: Array<string>,
    price: number,
    discountPrice: number,
    currency: string,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.images = images;
    this.sizes = sizes;
    this.availableSizes = availableSizes;
    this.price = price;
    this.discountPrice = discountPrice;
    this.currency = currency;
  }

  static fromJSON(data: any): DiscoverDetailModel {
    return new DiscoverDetailModel(
      data.id,
      data.name,
      data.category,
      data.description,
      data.images,
      data.sizes,
      data.availableSizes,
      data.price,
      data.discountPrice,
      data.currency,
    );
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      description: this.description,
      images: this.images,
      sizes: this.sizes,
      availableSizes: this.availableSizes,
      price: this.price,
      discountPrice: this.discountPrice,
      currency: this.currency,
    };
  }
}
