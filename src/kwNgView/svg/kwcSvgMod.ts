/**********************************************************************
 *
 * kw/kwcSvgMod.ts
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


import {kwcSvg} from './kwcSvg';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

            ],
        declarations:
            [
                kwcSvg,
            ],
        providers:
            [],
        exports:
            [
                kwcSvg,
            ]
    })
//@formatter:on
export class kwcSvgMod {

}
