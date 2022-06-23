/**********************************************************************
 *
 * kwNgComp/crumbs/kwcCrumbsMod.ts
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

import {kwcCrumbs} from './kwcCrumbs';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcCrumbs
            ],
        exports:
            [
                kwcCrumbs
            ]
    })
//@formatter:on
export class kwcCrumbsMod {

}
