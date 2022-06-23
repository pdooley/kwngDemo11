/**********************************************************************
 *
 * kwDlg/modules/material.module.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule(
    {
        imports:
            [
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatSelectModule,
                MatSidenavModule,
                MatStepperModule,
                MatTabsModule,
                MatToolbarModule,
                MatTableModule
            ],
        exports:
            [
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatSelectModule,
                MatSidenavModule,
                MatStepperModule,
                MatTabsModule,
                MatToolbarModule,
                MatTableModule
            ],
    })
export class materialModule {
}

//@formatter:on
