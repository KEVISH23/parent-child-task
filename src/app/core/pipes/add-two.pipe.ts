import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTwo'
})
export class AddTwoPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    return value.map(x => x + 10);
  }

}
