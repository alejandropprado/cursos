import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/country.entity';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  @Input() countries: ICountry[] = [];
}
