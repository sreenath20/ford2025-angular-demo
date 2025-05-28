import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], query:string): any[] {
    console.log("serch pipe:"+query);
    if(!products) return [];
    if(query == "") return products;

    return products.filter(
      product=>
        product.name.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase()));
  }

}
