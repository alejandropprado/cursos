export interface ICountry {
  flag: string;
  name: string;
  population: number;
  code: string;
}

interface IImageFlag {
  url: string;
  alt: string;
}

interface ICoatOfArms {
  url: string;
}

interface IMages {
  flag: IImageFlag;
  coatOfArms: ICoatOfArms;
}

interface IDetail {
  translations: Record<string, string>;
  images: IMages;
}

export interface ICountryDetail extends ICountry {
  detail: IDetail;
}
