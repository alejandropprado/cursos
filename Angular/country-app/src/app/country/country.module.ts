import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByCountryComponent,
    ByRegionComponent,
    ByCapitalComponent,
    DetailComponent,
    CountryListComponent,
    SearchFormComponent,
  ],
  exports: [
    ByCountryComponent,
    ByRegionComponent,
    ByCapitalComponent,
    DetailComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
})
export class CountryModule {}
