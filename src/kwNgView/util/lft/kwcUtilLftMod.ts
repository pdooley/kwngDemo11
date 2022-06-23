/**********************************************************************
 *
 * kw/kwcUtilMod.ts
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
import {kwcInputMod} from '@kwNgView/input/kwcInputMod';
import {kwcSelectMod} from '@kwNgView/select/kwcSelectMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';

import {kwcUtilLft} from './kwcUtilLft';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcBtnMod,
                kwcImgMod,
                kwcInputMod,
                kwcSelectMod,
                kwcTitleMod,
            ],
        declarations:
            [
                kwcUtilLft,
            ],
        providers:
            [],
        exports:
            [
                kwcUtilLft,
            ]
    })
//@formatter:on
export class kwcUtilLftMod {

}
