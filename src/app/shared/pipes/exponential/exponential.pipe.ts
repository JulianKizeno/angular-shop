import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'exponential'
})

export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
