/**********************************************************************
 *
 * kw/kwcHdrMod.ts
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

import {kwcSpanMod} from '@kwNgView/span/kwcSpanMod';
import {kwcSubTitleMod} from '@kwNgView/subTitle/kwcSubTitleMod';
import {kwcTabsMod} from '@kwNgView/tabs/kwcTabsMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';

import {kwcHdrCtr} from './kwcHdrCtr';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcSpanMod,
                kwcSubTitleMod,
                kwcTabsMod,
                kwcTitleMod,
            ],
        declarations:
            [
                kwcHdrCtr,
            ],
        providers:
            [],
        exports:
            [
                kwcHdrCtr,
            ]
    })
//@formatter:on
export class kwcHdrCtrMod {

}
