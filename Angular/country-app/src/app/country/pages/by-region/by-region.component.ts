import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/country.entity';
import { CountryService } from '../../services/country.service';
import { RegionType } from '../../interfaces/region.entity';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent implements OnInit {
  countries: ICountry[] = [];
  regions: RegionType[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  selectedRegion: RegionType | '' = '';
  isFetching: boolean = false;
  isError: boolean = false;

  constructor(private counntryService: CountryService) {}

  ngOnInit(): void {
    this.selectedRegion = this.counntryService.store.byRegion.term;
    this.countries = this.counntryService.store.byRegion.countries;
  }

  onSelectRegion(region: RegionType) {
    console.log({ region });
    if (region === this.selectedRegion) return;
    this.isFetching = true;
    this.countries = [];
    this.selectedRegion = region;
    this.counntryService.getByRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isFetching = false;
    });
  }
}
