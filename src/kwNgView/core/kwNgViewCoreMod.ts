//@formatter:off
import {NgModule} from '@angular/core';
import {Optional} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SkipSelf} from '@angular/core';

import {materialModule} from './modules/material.module';
import {sharedModule} from './modules/shared.module';

@NgModule(
    {
        imports:
            [
                RouterModule,

                materialModule,
                sharedModule
            ],
        declarations:
            [],
        exports:
            [
                RouterModule,

                materialModule,
                sharedModule,
            ]
    })
export class kwNgViewCoreMod {

    constructor(@Optional() @SkipSelf() parentModule: kwNgViewCoreMod) {
        //console.log('kwNgViewCoreMod::constructor() called.');

        //throwIfAlreadyLoaded(parentModule, 'kwNgViewCoreMod');
    }
}

//@formatter:on
