/**********************************************************************
 *
 * kw/kwcPageMod.ts
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

import {kwcHdrMod} from '@kwNgView/hdr/kwcHdrMod';
import {kwcBdyMod} from '@kwNgView/bdy/kwcBdyMod';
import {kwcUtilMod} from '@kwNgView/util/kwcUtilMod';
import {kwcFtrMod} from '@kwNgView/ftr/kwcFtrMod';

import {kwcPage} from './kwcPage';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcHdrMod,
                kwcBdyMod,
                kwcUtilMod,
                kwcFtrMod,
            ],
        declarations:
            [
                kwcPage,
            ],
        providers:
            [],
        exports:
            [
                kwcPage,
            ]
    })
//@formatter:on
export class kwcPageMod {

}
