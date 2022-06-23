/**********************************************************************
 *
 * kw/kwcUtilRhtMod.ts
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

import {kwcUtilRht} from './kwcUtilRht';

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
                kwcUtilRht,
            ],
        providers:
            [],
        exports:
            [
                kwcUtilRht,
            ]
    })
//@formatter:on
export class kwcUtilRhtMod {

}
