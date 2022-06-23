/**********************************************************************
 *
 * kw/kwcPageNotFoundMod.ts
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

import {kwcPageNotFound} from './kwcPageNotFound';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcPageNotFound,
            ],
        providers:
            [],
        exports:
            [
                kwcPageNotFound,
            ]
    })
//@formatter:on
export class kwcPageNotFoundMod {

}
