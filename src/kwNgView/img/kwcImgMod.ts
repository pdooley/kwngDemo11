/**********************************************************************
 *
 * kw/kwcImgMod.ts
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

import {kwcIconMod} from '@kwNgView/icon/kwcIconMod';
import {kwcLogoMod} from '@kwNgView/logo/kwcLogoMod';
import {kwcSvgMod} from '@kwNgView/svg/kwcSvgMod';
import {kwcSvgRawMod} from '@kwNgView/svgRaw/kwcSvgRawMod';

import {kwcImg} from './kwcImg';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcIconMod,
                kwcLogoMod,
                kwcSvgMod,
                kwcSvgRawMod,
            ],
        declarations:
            [
                kwcImg,
            ],
        providers:
            [],
        exports:
            [
                kwcImg,
            ]
    })
//@formatter:on
export class kwcImgMod {

}
