/**********************************************************************
 *
 * kw/kwcBtnMod.ts
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

import {kwcImgMod} from '@kwNgView/img/kwcImgMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';

import {kwcBtn} from './kwcBtn';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcImgMod,
                kwcTitleMod
            ],
        declarations:
            [
                kwcBtn,
            ],
        providers:
            [],
        exports:
            [
                kwcBtn,
            ]
    })
//@formatter:on
export class kwcBtnMod {

}
