/**********************************************************************
 *
 * kw/kwcRouterMod.ts
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

import {kwcRouter} from './kwcRouter';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcRouter,
            ],
        providers:
            [],
        exports:
            [
                kwcRouter,
            ]
    })
//@formatter:on
export class kwcRouterMod {

}
