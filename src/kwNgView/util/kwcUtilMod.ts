/**********************************************************************
 *
 * kw/kwcUtilMod.ts
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

import {kwcUtilLftMod} from './lft/kwcUtilLftMod';
import {kwcUtilRhtMod} from './rht/kwcUtilRhtMod';

import {kwcUtil} from './kwcUtil';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcUtilLftMod,
                kwcUtilRhtMod,
            ],
        declarations:
            [
                kwcUtil,
            ],
        providers:
            [],
        exports:
            [
                kwcUtil,
            ]
    })
//@formatter:on
export class kwcUtilMod {

}
