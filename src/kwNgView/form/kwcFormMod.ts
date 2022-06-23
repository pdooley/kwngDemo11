/**********************************************************************
 *
 * kw/kwcFormMod.ts
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


import {kwcForm} from './kwcForm';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

            ],
        declarations:
            [
                kwcForm,
            ],
        providers:
            [],
        exports:
            [
                kwcForm,
            ]
    })
//@formatter:on
export class kwcFormMod {

}
