type Highlight = {
  name: string;
  pins: Array<object>;
};

export class DiscoverModel {
  public highlight: Highlight;
  public categories: Array<object>;

  constructor(highlight: Highlight, categories: Array<object>) {
    this.highlight = highlight;
    this.categories = categories;
  }

  static fromJSON(data: any): DiscoverModel {
    return new DiscoverModel(data.highlight, data.categories);
  }

  toJSON(): object {
    return {
      highlight: this.highlight,
      categories: this.categories,
    };
  }
}
