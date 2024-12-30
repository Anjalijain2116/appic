import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!value) {
      return 'No value provided';
    }
    return `${value} - ${args.join(' ')}`;
  }
}
