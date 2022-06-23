/**********************************************************************
 *
 * kw/kwcSvgRawFltrMod.ts
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

import {kwcSvgRawFltrCmp} from './kwcSvgRawFltrCmp';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcSvgRawFltrCmp,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRawFltrCmp,
            ]
    })
//@formatter:on
export class kwcSvgRawFltrCmpMod {

}
