/**********************************************************************
 *
 * kw/kwNgDlgMod.ts
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

import {kwcSelect} from './kwcSelect';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcSelect,
            ],
        providers:
            [],
        exports:
            [
                kwcSelect,
            ]
    })
//@formatter:on
export class kwcSelectMod {

}
