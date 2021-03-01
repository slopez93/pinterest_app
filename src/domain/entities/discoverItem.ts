export class DiscoverItem {
  private _id: number;
  private _name: string;
  private _category: string;
  private _images: Array<string>;
  private _sizes: Array<string>;
  private _availableSizes: Array<string>;
  private _price: number;
  private _discountPrice: number;
  private _currency: string;

  constructor(
    id: number,
    name: string,
    category: string,
    images: Array<string>,
    sizes: Array<string>,
    availableSizes: Array<string>,
    price: number,
    discountPrice: number,
    currency: string,
  ) {
    this._id = id;
    this._name = name;
    this._category = category;
    this._images = images;
    this._sizes = sizes;
    this._availableSizes = availableSizes;
    this._price = price;
    this._discountPrice = discountPrice;
    this._currency = currency;
  }

  static create(
    id: number,
    name: string,
    category: string,
    images: Array<string>,
    sizes: Array<string>,
    availableSizes: Array<string>,
    price: number,
    discountPrice: number,
    currency: string,
  ): DiscoverItem {
    return new DiscoverItem(
      id,
      name,
      category,
      images,
      sizes,
      availableSizes,
      price,
      discountPrice,
      currency,
    );
  }

  public get price() {
    return `${this._price}${this._currency}`;
  }

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      category: this._category,
      images: this._images,
      sizes: this._sizes,
      availableSizes: this._availableSizes,
      price: this.price,
      discountPrice: this._discountPrice,
      currency: this._currency,
    };
  }
}
