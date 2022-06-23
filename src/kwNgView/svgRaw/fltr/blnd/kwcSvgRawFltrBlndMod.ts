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

import {kwcSvgRawFltrBlnd} from './kwcSvgRawFltrBlnd';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcSvgRawFltrBlnd,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRawFltrBlnd,
            ]
    })
//@formatter:on
export class kwcSvgRawFltrBlndMod {

}
