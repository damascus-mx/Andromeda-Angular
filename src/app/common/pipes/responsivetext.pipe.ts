/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Transforms given string to a limited-by-user string length
 */

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
