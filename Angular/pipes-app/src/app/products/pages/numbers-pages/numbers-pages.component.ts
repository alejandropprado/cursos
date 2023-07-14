import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-pages',
  templateUrl: './numbers-pages.component.html',
  styleUrls: ['./numbers-pages.component.css'],
})
export class NumbersPagesComponent {
  public numberWithDecimals: number = 2345678.987654;
  public percentage: number = 0.4832;
}
