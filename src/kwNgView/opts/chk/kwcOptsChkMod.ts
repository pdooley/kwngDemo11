/**********************************************************************
 *
 * kw/kwcOptsChkMod.ts
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


import {kwcOptsChk} from './kwcOptsChk';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

            ],
        declarations:
            [
                kwcOptsChk,
            ],
        providers:
            [],
        exports:
            [
                kwcOptsChk,
            ]
    })
//@formatter:on
export class kwcOptsChkMod {

}
