import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    heros: IHero[],
    attribute?: keyof IHero,
    order: 'asc' | 'desc' = 'desc'
  ): IHero[] {
    if (!attribute) {
      return heros;
    }

    const sortOrder: number = order === 'desc' ? 1 : -1;
    return heros.sort((a: IHero, b: IHero) => {
      const valueA = a[attribute];
      const valueB = b[attribute];

      if (valueA < valueB) {
        return -1 * sortOrder;
      } else if (valueA > valueB) {
        return 1 * sortOrder;
      } else {
        return 0;
      }
    });
  }
}
