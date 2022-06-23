/**********************************************************************
 *
 * kw/kwcFldMod.ts
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

import {kwcFld} from './kwcFld';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcFld,
            ],
        providers:
            [],
        exports:
            [
                kwcFld,
            ]
    })
//@formatter:on
export class kwcFldMod {

}
