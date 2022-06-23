/**********************************************************************
 *
 * kw/kwcTabHorMod.ts
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

import {kwcTabHor} from './kwcTabHor';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcTabHor,
            ],
        providers:
            [],
        exports:
            [
                kwcTabHor,
            ]
    })
//@formatter:on
export class kwcTabHorMod {

}
