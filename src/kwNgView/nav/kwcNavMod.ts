/**********************************************************************
 *
 * kw/kwcNavMod.ts
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

import {kwcNavLinkMod} from './link/kwcNavLinkMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';

import {kwcNav} from './kwcNav';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcNavLinkMod,
                kwcTitleMod,
            ],
        declarations:
            [
                kwcNav,
            ],
        providers:
            [],
        exports:
            [
                kwcNav,

                kwcNavLinkMod
            ]
    })
//@formatter:on
export class kwcNavMod {

}
