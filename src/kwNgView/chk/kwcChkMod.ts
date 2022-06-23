/**********************************************************************
 *
 * kw/kwcChkMod.ts
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


import {kwcChk} from './kwcChk';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

            ],
        declarations:
            [
                kwcChk,
            ],
        providers:
            [],
        exports:
            [
                kwcChk,
            ]
    })
//@formatter:on
export class kwcChkMod {

}
