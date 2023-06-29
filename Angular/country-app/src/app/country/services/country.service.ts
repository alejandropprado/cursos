import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, tap } from 'rxjs';
import { ICountry, ICountryDetail } from '../interfaces/country.entity';
import { ICountryResponseDTO, ITranslations } from '../dto/countryResponse.dto';
import { IStore } from '../interfaces/store.entity';
import { RegionType } from '../interfaces/region.entity';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private api: string = 'https://restcountries.com/v3.1';
  private apiParams: HttpParams = new HttpParams().set(
    'fields',
    'name,flag,population,cca2,ccn3,cca3'
  );

  public store: IStore = {
    byCapital: { term: '', countries: [] },
    byRegion: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
  };

  constructor(private httpService: HttpClient) {
    this.getStore();
  }

  getByCountry(country: string): Observable<ICountry[]> {
    return this.getCountryRequest(`${this.api}/name/${country}`, {
      params: this.apiParams,
    }).pipe(
      tap((countries) => {
        this.store.byCountry.term = country;
        this.store.byCountry.countries = countries;
      }),
      tap(() => this.setStore())
    );
  }

  getByRegion(region: RegionType): Observable<ICountry[]> {
    return this.getCountryRequest(`${this.api}/region/${region}`, {
      params: this.apiParams,
    }).pipe(
      tap((countries) => {
        this.store.byRegion.term = region;
        this.store.byRegion.countries = countries;
      }),
      tap(() => this.setStore())
    );
  }

  getByCapital(capital: string): Observable<ICountry[]> {
    return this.getCountryRequest(`${this.api}/capital/${capital}`, {
      params: this.apiParams,
    }).pipe(
      tap((countries) => {
        this.store.byCapital.term = capital;
        this.store.byCapital.countries = countries;
      }),
      tap(() => this.setStore())
    );
  }

  getByCode(code: string): Observable<ICountryDetail> {
    return this.httpService
      .get<ICountryResponseDTO[]>(`${this.api}/alpha/${code}`)
      .pipe(
        map((countriesResponse) => {
          const countryResponse = countriesResponse[0];
          const countryDetail: ICountryDetail = {
            ...this.countryResponseAdapter(countryResponse),
            detail: {
              images: {
                flag: {
                  url: countryResponse.flags.svg,
                  alt: countryResponse.flags.alt,
                },
                coatOfArms: {
                  url: countryResponse.coatOfArms.svg,
                },
              },
              translations: Object.keys(countryResponse.translations).reduce<
                Record<string, string>
              >(
                (acum, key) => ({
                  ...acum,
                  [key]:
                    countryResponse?.translations[key as keyof ITranslations]
                      ?.common ?? '',
                }),
                {}
              ),
            },
          };
          return countryDetail;
        })
      );
  }

  private getCountryRequest(url: string, options?: { params: HttpParams }) {
    return this.httpService
      .get<ICountryResponseDTO[]>(
        url,
        options?.params ? { params: options?.params } : {}
      )
      .pipe(map(this.countryResponseAdapter), delay(2000));
  }

  private countryResponseAdapter<
    T extends ICountryResponseDTO | ICountryResponseDTO[]
  >(
    countryResponse: T
  ): T extends ICountryResponseDTO[] ? ICountry[] : ICountry {
    if (Array.isArray(countryResponse)) {
      const countries: ICountry[] = countryResponse.map<ICountry>(
        (response) => ({
          name: response.name?.common ?? response.name?.nativeName ?? '',
          flag: response.flag,
          population: response.population,
          code: response.cca2 ?? response.ccn3 ?? response.cca3,
        })
      );

      return countries as T extends ICountryResponseDTO[]
        ? ICountry[]
        : ICountry;
    }

    const country: ICountry = {
      name:
        countryResponse.name?.common ?? countryResponse.name?.nativeName ?? '',
      flag: countryResponse.flag,
      population: countryResponse.population,
      code:
        countryResponse.cca2 ?? countryResponse.ccn3 ?? countryResponse.cca3,
    };

    return country as T extends ICountryResponseDTO[] ? ICountry[] : ICountry;
  }

  getStore() {
    try {
      const store = localStorage.getItem('country_store');
      if (store) {
        const storeParsed = JSON.parse(store) as IStore;
        this.store = storeParsed;
      }
    } catch (error) {
      this.setStore();
    }
  }
  setStore() {
    localStorage.setItem('country_store', JSON.stringify(this.store));
  }
}
