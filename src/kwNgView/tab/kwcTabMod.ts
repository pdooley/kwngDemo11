/**********************************************************************
 *
 * kw/kwcTabMod.ts
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

import {kwcTab} from './kwcTab';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcTab,
            ],
        providers:
            [],
        exports:
            [
                kwcTab,
            ]
    })
//@formatter:on
export class kwcTabMod {

}
