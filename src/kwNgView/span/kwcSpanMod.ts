/**********************************************************************
 *
 * kw/kwcSpanMod.ts
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

import {kwcSubTitleMod} from '@kwNgView/subTitle/kwcSubTitleMod';

import {kwcSpan} from './kwcSpan';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcSubTitleMod
            ],
        declarations:
            [
                kwcSpan,
            ],
        providers:
            [],
        exports:
            [
                kwcSpan,
            ]
    })
//@formatter:on
export class kwcSpanMod {

}
