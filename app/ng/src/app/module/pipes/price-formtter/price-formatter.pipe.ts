import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {

  transform(value: string): number {
    // @ts-ignore
    return parseInt(value).toLocaleString('ru-RU');
  }
}
