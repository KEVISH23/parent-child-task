import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEven'
})
export class FilterEvenPipe implements PipeTransform {
  transform(value: Array<any>, ...args: any[]): any {
    console.log(args)
    return value.filter((x)=>x%2==0)
  }

}
