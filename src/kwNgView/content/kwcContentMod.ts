/**********************************************************************
 *
 * kw/kwcContentMod.ts
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

import {kwcTableMod} from '@kwNgView/table/kwcTableMod';
import {kwcRowsMod} from '@kwNgView/rows/kwcRowsMod';

import {kwcContent} from './kwcContent';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcTableMod,
                kwcRowsMod,
            ],
        declarations:
            [
                kwcContent,
            ],
        providers:
            [],
        exports:
            [
                kwcContent,
            ]
    })
//@formatter:on
export class kwcContentMod {

}
