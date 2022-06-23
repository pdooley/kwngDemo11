/**********************************************************************
 *
 * kw/kwcHdrMod.ts
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

import {kwcHdrLft} from './kwcHdrLft';

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
                kwcHdrLft,
            ],
        providers:
            [],
        exports:
            [
                kwcHdrLft,
            ]
    })
//@formatter:on
export class kwcHdrLftMod {

}
