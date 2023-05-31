export interface IData {
  headerImage: IImage;
  id: string;
  links: ILinks;
  longTitle: string;
  objectNumber: string;
  principalOrFirstMaker: string;
  title: string;
  webImage: IWebImage;
}

export interface IImage {
  guid: string;
  url: string;
}

export interface IWebImage {
  guid: string;
  url: string;
}

export interface ILinks {
  self: string;
  web: string;
}

export type ContextType = {
  data: IData[];
  searchSuggest: string[];
  backgroundImage: string;
  setData: (data: IData[]) => void;
  setBackgroundImage: (backgroundImage: string) => void;
};
