/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description A factory's component to resolve popups loaded lazily
 */
import { Injector, Injectable } from '@angular/core';
import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class PopupService {
  constructor(
    private injector: Injector,
    private overlay: Overlay,
    private dialog: MatDialog
  ) {}

  open<T = any>(component: ComponentType<T>, config: any): any {
    return this.dialog.open(component, config);
  }
}
