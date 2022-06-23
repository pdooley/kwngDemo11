/**********************************************************************
 *
 * kw/kwNgListMod.ts
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

import {kwcCreate} from './kwcCreate';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcCreate,
            ],
        providers:
            [],
        entryComponents:
            [
                kwcCreate,
            ],
        exports:
            [
                kwcCreate,
            ]
    })
//@formatter:on
export class kwcCreateMod {

}
