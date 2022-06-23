/**********************************************************************
 *
 * kw/kwcFtrRhtMod.ts
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

import {kwcBtnMod} from '@kwNgView/btn/kwcBtnMod';
import {kwcImgMod} from '@kwNgView/img/kwcImgMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';

import {kwcFtrRht} from './kwcFtrRht';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcBtnMod,
                kwcImgMod,
                kwcTitleMod,
            ],
        declarations:
            [
                kwcFtrRht,
            ],
        providers:
            [],
        exports:
            [
                kwcFtrRht,
            ]
    })
//@formatter:on
export class kwcFtrRhtMod {

}
