/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Transforms non-sanitized URLs
 */

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
