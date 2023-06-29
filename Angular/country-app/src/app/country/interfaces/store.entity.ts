import { ICountry } from './country.entity';
import { RegionType } from './region.entity';

interface ITermCountries<T> {
  term: T;
  countries: ICountry[];
}

interface IByCapital extends ITermCountries<string> {}
interface IByRegion extends ITermCountries<RegionType | ''> {}
interface IByCountry extends ITermCountries<string> {}

export interface IStore {
  byCapital: IByCapital;
  byRegion: IByRegion;
  byCountry: IByCountry;
}
