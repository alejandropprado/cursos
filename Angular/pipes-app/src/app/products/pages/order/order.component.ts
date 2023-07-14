import { Component } from '@angular/core';
import { Color, IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public toUpper: boolean = false;
  public orderByAttribute: keyof IHero | undefined;
  public heros: IHero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green,
    },
  ];

  onToggleCase() {
    this.toUpper = !this.toUpper;
  }

  onOrderChange(attribute: keyof IHero) {
    this.orderByAttribute = attribute;
  }
}
