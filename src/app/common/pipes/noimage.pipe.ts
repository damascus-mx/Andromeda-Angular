import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any): string {
    if ( !image ) {
      return 'assets/img/common/default-user.png';
    }
    return image;
  }

}