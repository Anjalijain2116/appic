import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false,
  standalone: true
})
export class ImpurePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return 'No value provided';
    }
    return `${value} - ${args.join(' ')}`;
  }
}