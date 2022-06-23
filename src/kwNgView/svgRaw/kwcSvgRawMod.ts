/**********************************************************************
 *
 * kw/kwcSvgRawMod.ts
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

import {kwcSvgRawDefsMod} from './defs/kwcSvgRawDefsMod';
import {kwcSvgRawPathMod} from './path/kwcSvgRawPathMod';

import {kwcSvgRaw} from './kwcSvgRaw';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcSvgRawDefsMod,
                kwcSvgRawPathMod,
            ],
        declarations:
            [
                kwcSvgRaw,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRaw,
            ]
    })
//@formatter:on
export class kwcSvgRawMod {

}
