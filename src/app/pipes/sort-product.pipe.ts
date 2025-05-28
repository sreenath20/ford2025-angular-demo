import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProduct'
})
export class SortProductPipe implements PipeTransform {

  transform(products: any[], type: string = 'id'): any[] {
    return products.slice().sort(
      (p1, p2) =>
        p1[type] - p2[type]
      // p1.price - p2.price

    );
  }

}
