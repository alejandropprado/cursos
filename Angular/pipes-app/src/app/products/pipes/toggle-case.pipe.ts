import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCase implements PipeTransform {
  transform(value: string, isUpper?: boolean): string {
    return isUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
