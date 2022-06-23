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

import {kwcSvgRawFltrBlndMod} from './blnd/kwcSvgRawFltrBlndMod';
import {kwcSvgRawFltrCmpMod} from './cmp/kwcSvgRawFltrCmpMod';
import {kwcSvgRawFltrFldMod} from './fld/kwcSvgRawFltrFldMod';

import {kwcSvgRawFltr} from './kwcSvgRawFltr';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcSvgRawFltrBlndMod,
                kwcSvgRawFltrCmpMod,
                kwcSvgRawFltrFldMod,

            ],
        declarations:
            [
                kwcSvgRawFltr,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRawFltr,
            ]
    })
//@formatter:on
export class kwcSvgRawFltrMod {

}
