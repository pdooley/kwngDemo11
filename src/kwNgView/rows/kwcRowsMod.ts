/**********************************************************************
 *
 * kw/kwNgDlgMod.ts
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

import {kwcRows} from './kwcRows';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcRows,
            ],
        providers:
            [],
        exports:
            [
                kwcRows,
            ]
    })
//@formatter:on
export class kwcRowsMod {

}
