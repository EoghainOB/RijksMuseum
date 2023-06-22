export interface IData {
  hasImage: boolean;
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
  page: number;
  century: number;
  search: string;
  searchTerm: string;
  setData: (data: IData[]) => void;
  setBackgroundImage: (backgroundImage: string) => void;
  setPage: (page: number) => void;
  setCentury: (century: number) => void;
  setSearch: (search: string) => void;
  setSearchTerm: (search: string) => void;
};
