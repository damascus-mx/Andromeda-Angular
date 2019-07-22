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
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
    MatDividerModule,
    MatBadgeModule,
    MatTabsModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatAutocompleteModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';


@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatSortModule,
        MatDialogModule,
        MatDividerModule,
        MatMenuModule,
        MatBadgeModule,
        MatSelectModule,
        MatTabsModule,
        MatStepperModule,
        MatBottomSheetModule,
        MatSlideToggleModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CdkStepperModule,
        MatAutocompleteModule,
    ]
})

export class MaterialUtils { }