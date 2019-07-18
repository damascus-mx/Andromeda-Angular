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
