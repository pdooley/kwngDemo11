/**********************************************************************
 *
 * kw/kwcSvgRawPathMod.ts
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

import {kwcSvgRawPath} from './kwcSvgRawPath';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcSvgRawPath,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRawPath,
            ]
    })
//@formatter:on
export class kwcSvgRawPathMod {

}
