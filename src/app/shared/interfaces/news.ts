export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ISource {
  id: number;
  name: string;
}
