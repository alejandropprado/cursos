import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css'],
})
export class BasicPagesComponent {
  public nameLower: string = 'alejandro';
  public nameUpper: string = 'ALEJANDRO';
  public fullName: string = 'AleJandRo PRadO';
  public customDate = new Date();
}
