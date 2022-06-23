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

import {kwcTabsMod} from '@kwNgView/tabs/kwcTabsMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';

import {kwcFtrCtr} from './kwcFtrCtr';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcTabsMod,
                kwcTitleMod,
            ],
        declarations:
            [
                kwcFtrCtr,
            ],
        providers:
            [],
        exports:
            [
                kwcFtrCtr,
            ]
    })
//@formatter:on
export class kwcFtrCtrMod {

}
