import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, parseFormat?: string, displayFormat?: string): string {
    if (!displayFormat) {
      displayFormat = 'dddd, MMMM DD YYYY';
    }
    
    if (!parseFormat) {
      parseFormat = 'dddd, DD MMMM YYYY';
    }
    
    const date = dayjs(value, 'DD MMMM YYYY');

    return date.format(displayFormat);
  }

}
