/**********************************************************************
 *
 * kwcComp/state/dlg/kwcDlgMod.ts
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

import {kwcDlg} from './kwcDlg';
import {kwcDlgCtrlVal} from './kwcDlgCtrlVal';
import {kwcDlgVal} from './kwcDlgVal';


@NgModule(
    {
        imports:
            [],
        declarations:
            [
                kwcDlg,

                kwcDlgCtrlVal,
            ],
        providers:
            [
                kwcDlgVal,
            ],
        exports:
            [
                kwcDlg,

                kwcDlgCtrlVal,
            ]
    })
//@formatter:on
export class kwcDlgMod {

    constructor() {
        //console.log('kwcDlgMod::constructor() called.');
    }
}
