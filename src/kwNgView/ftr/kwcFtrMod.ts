/**********************************************************************
 *
 * kw/kwcFtrMod.ts
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

import {kwcFtrCtrMod} from './ctr/kwcFtrCtrMod';
import {kwcFtrLftMod} from './lft/kwcFtrLftMod';
import {kwcFtrRhtMod} from './rht/kwcFtrRhtMod';

import {kwcFtr} from './kwcFtr';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcFtrCtrMod,
                kwcFtrLftMod,
                kwcFtrRhtMod,
            ],
        declarations:
            [
                kwcFtr,
            ],
        providers:
            [],
        exports:
            [
                kwcFtr,
            ]
    })
//@formatter:on
export class kwcFtrMod {

}
