import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/country.entity';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  searchedCountry: string = '';
  isFetching: boolean = false;
  isError: boolean = false;
  countries: ICountry[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.searchedCountry = this.countryService.store.byCountry.term;
    this.countries = this.countryService.store.byCountry.countries;
  }

  onSubmit(country: string) {
    this.searchedCountry = country;
    this.isFetching = true;
    this.isError = false;
    this.countryService.getByCountry(country).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.isFetching = false;
      },
      error: () => {
        this.isError = true;
        this.isFetching = false;
      },
    });
  }

  onDebounceSearch(country: string) {
    this.isError = false;
  }
}
