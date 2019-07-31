/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Material Bundler
 */
import { NgModule } from '@angular/core';
import * as Material from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';


@NgModule({
    exports: [
        Material.MatButtonModule,
        Material.MatCardModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatIconModule,
        Material.MatToolbarModule,
        Material.MatListModule,
        Material.MatChipsModule,
        Material.MatDialogModule,
        Material.MatDividerModule,
        Material.MatBadgeModule,
        Material.MatAutocompleteModule,
        Material.MatProgressSpinnerModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CdkStepperModule,
    ]
})

export class MaterialModule { }
