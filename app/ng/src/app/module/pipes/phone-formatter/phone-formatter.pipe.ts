import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatter'
})
export class PhoneFormatterPipe implements PipeTransform {

  transform(value: unknown): string {
      const cleaned = ('' + value).replace(/\D/g, '');
      const match = cleaned.match(/^[7,8](\d{3})(\d{3})(\d{2})(\d{2})$/);

      // Формат +7 (999) 999-99-99
      if (match) {
          return '+7 (' + match[1] + ') ' + match[2] + '-' + match[3] + '-' + match[4];
      }

      return null;
  }
}
