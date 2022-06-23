/**********************************************************************
 *
 * kw/kwcSvgRawDefsMod.ts
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

import {kwcSvgRawFltrMod} from '../fltr/kwcSvgRawFltrMod';

import {kwcSvgRawDefs} from './kwcSvgRawDefs';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcSvgRawFltrMod,
            ],
        declarations:
            [
                kwcSvgRawDefs,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRawDefs,
            ]
    })
//@formatter:on
export class kwcSvgRawDefsMod {

}
