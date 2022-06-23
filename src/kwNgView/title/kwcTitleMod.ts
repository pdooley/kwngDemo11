/**********************************************************************
 *
 * kw/kwcTitleMod.ts
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
import {kwcTitle} from './kwcTitle';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcSpanMod,
            ],
        declarations:
            [
                kwcTitle,
            ],
        providers:
            [],
        exports:
            [
                kwcTitle,
            ]
    })
//@formatter:on
export class kwcTitleMod {

}
