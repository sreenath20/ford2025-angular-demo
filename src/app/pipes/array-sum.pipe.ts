import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySum'
})
export class ArraySumPipe implements PipeTransform {

  transform(values: number[]): number {
    
    let sum:number=0;
    for(let value of values){
      sum=sum+value;
    }
    return sum;
  }

}
