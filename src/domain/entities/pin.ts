export class Pin {
  private _id;
  private _name: string;
  private _thumbnail: string;
  private _category: string;
  private _color: string;
  private _size: string;

  constructor(
    id: string,
    name: string,
    thumbnail: string,
    category: string,
    color: string,
    size: string,
  ) {
    this._id = id;
    this._name = name;
    this._thumbnail = thumbnail;
    this._category = category;
    this._color = color;
    this._size = size;
  }

  static create(
    id: string,
    name: string,
    thumbnail: string,
    category: string,
    color: string,
    size: string,
  ): Pin {
    return new Pin(id, name, thumbnail, category, color, size);
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
