/**********************************************************************
 *
 * kw/kwcSubTitleMod.ts
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

import {kwcSubTitle} from './kwcSubTitle';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcSubTitle,
            ],
        providers:
            [],
        exports:
            [
                kwcSubTitle,
            ]
    })
//@formatter:on
export class kwcSubTitleMod {

}
