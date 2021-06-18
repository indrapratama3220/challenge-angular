import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'customCase'
})
export class CustomCasePipe implements PipeTransform {

  titleCase = new TitleCasePipe()
  
  constructor( ){
      
  }

  transform(input:string): string{
    console.log(input);
    if (!input) {
        return '';
    } else {
        return input.replace(/\b\w/g, first => first.toLocaleUpperCase()) 
    }
  }

}
