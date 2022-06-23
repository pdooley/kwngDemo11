/**********************************************************************
 *
 * kw/kwcSvgRawFltrFldMod.ts
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

import {kwcSvgRawFltrFld} from './kwcSvgRawFltrFld';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcSvgRawFltrFld,
            ],
        providers:
            [],
        exports:
            [
                kwcSvgRawFltrFld,
            ]
    })
//@formatter:on
export class kwcSvgRawFltrFldMod {

}
