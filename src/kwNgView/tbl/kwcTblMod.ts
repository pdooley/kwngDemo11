/**********************************************************************
 *
 * kw/kwcDlgMod.ts
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

import {kwNgViewCoreMod} from '@kwNgViewCore/kwNgViewCoreMod';


import {kwcInputMod} from '@kwNgView/input/kwcInputMod';
import {kwcSelectMod} from '@kwNgView/select/kwcSelectMod';
import {kwcTableMod} from '@kwNgView/table/kwcTableMod';

import {kwcTbl} from './kwcTbl';

import {kwcTop} from './top/kwcTop';
import {kwcCol} from './col/kwcCol';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcInputMod,
                kwcSelectMod,
                kwcTableMod
            ],
        declarations:
            [
                kwcTbl,

                kwcTop,
                kwcCol,
            ],
        providers:
            [],
        exports:
            [
                kwcTbl,
            ]
    })
//@formatter:on
export class kwcTblMod {

}
