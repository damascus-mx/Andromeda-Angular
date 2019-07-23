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
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatBadgeModule,
    MatAutocompleteModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';


@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatChipsModule,
        MatDialogModule,
        MatDividerModule,
        MatBadgeModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CdkStepperModule,
        MatAutocompleteModule,
    ]
})

export class MaterialModule { }