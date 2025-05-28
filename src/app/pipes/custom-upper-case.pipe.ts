import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUpperCase'
})
export class CustomUpperCasePipe implements PipeTransform {

  transform(value: string, leftDelimeter:string='*',rightDelimeter:string='*'): string {
    return leftDelimeter + value.toUpperCase() +rightDelimeter;
  }

}
