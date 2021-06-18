import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, displayFormat?: string): string {
    if (!displayFormat) {
      displayFormat = 'dddd, MMMM DD YYYY';
    }
    
    const date = dayjs();

    return date.format(displayFormat);
  }

}
