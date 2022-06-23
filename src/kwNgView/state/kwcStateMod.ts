/**********************************************************************
 *
 * kwNgView/state/kwcStateMod.ts
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

//import {kwcMod}             from '@kwc/kwcMod'

import {kwcDlgMod} from './dlg/kwcDlgMod';
import {kwcUserMod} from './user/kwcUserMod';

import {kwcState} from './kwcState';


@NgModule(
    {
        imports:
            [
//		kwcMod,

            kwcDlgMod,
            kwcUserMod,
        ],
        declarations:
            [
                kwcState,
            ],
        providers:
            [],
        exports:
            [
                kwcState,

                kwcDlgMod,
                kwcUserMod,
            ]
    })
//@formatter:on
export class kwcStateMod {

    constructor() {
        //console.log('kwcStateMod::constructor() called.');
    }
}
