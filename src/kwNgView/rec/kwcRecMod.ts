/**********************************************************************
 *
 * kw/kwcRecMod.ts
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

import {kwcRec} from './kwcRec';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcRec,
            ],
        providers:
            [],
        exports:
            [
                kwcRec,
            ]
    })
//@formatter:on
export class kwcRecMod {

}
