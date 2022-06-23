/**********************************************************************
 *
 * kw/kwNgHdrMod.ts
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

import {kwcListHdr} from './kwcListHdr';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
                kwcTabsMod
            ],
        declarations:
            [
                kwcListHdr,
            ],
        providers:
            [],
        exports:
            [
                kwcListHdr,
            ]
    })
//@formatter:on
export class kwcListHdrMod {

}
