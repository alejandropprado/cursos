import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/country.entity';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent implements OnInit {
  searchedCapital: string = '';
  isFetching: boolean = false;
  isError: boolean = false;
  countries: ICountry[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    const { countries, term } = this.countryService.store.byCapital;
    this.countries = countries;
    this.searchedCapital = term;
  }

  onSubmit(capital: string) {
    this.searchedCapital = capital;
    this.isFetching = true;
    this.isError = false;
    this.countryService.getByCapital(capital).subscribe({
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

  onDebounceSearch(capital: string) {
    this.isError = false;
  }
}
