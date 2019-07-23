import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responsivetext'
})
export class ResponsivetextPipe implements PipeTransform {

  transform(text: string, maxChars: number): string {
    if ( text.length > maxChars ) {
      return `${text.substr(0, maxChars)}...`;
    }

    return text;
  }

}
