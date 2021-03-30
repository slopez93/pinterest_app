type PinCreateInput = {
  id: string;
  name: string;
  thumbnail: string;
  images?: Array<string>;
  sizes?: Array<string>;
  category: string;
  color: string;
  size?: string;
};

export class Pin {
  private _id: string;
  private _name: string;
  private _thumbnail: string;
  private _images: Array<string>;
  private _sizes: Array<string>;
  private _category: string;
  private _color: string;
  private _size: string;

  constructor(
    id: string,
    name: string,
    thumbnail: string,
    images: Array<string>,
    sizes: Array<string>,
    category: string,
    color: string,
    size: string,
  ) {
    this._id = id;
    this._name = name;
    this._thumbnail = thumbnail;
    this._images = images;
    this._sizes = sizes;
    this._category = category;
    this._color = color;
    this._size = size;
  }

  static create({
    id,
    name,
    thumbnail,
    images = [],
    sizes = [],
    category,
    color,
    size = 'M',
  }: PinCreateInput): Pin {
    return new Pin(id, name, thumbnail, images, sizes, category, color, size);
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get thumbnail() {
    return this._thumbnail;
  }

  public get images() {
    return this._images;
  }

  public get sizes() {
    return this._sizes;
  }

  public get category() {
    return this._category;
  }

  public get color() {
    return this._color;
  }

  public get size() {
    return this._size;
  }
}
