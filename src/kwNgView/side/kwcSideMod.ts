/**********************************************************************
 *
 * kw/kwcSideMod.ts
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

import {kwcSide} from './kwcSide';
import {kwcInputMod} from '@kwNgView/input/kwcInputMod';
import {kwcLogoMod} from '@kwNgView/logo/kwcLogoMod';
import {kwcTabsMod} from '@kwNgView/tabs/kwcTabsMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcInputMod,
                kwcLogoMod,
                kwcTabsMod,
                kwcTitleMod
            ],
        declarations:
            [
                kwcSide,
            ],
        providers:
            [],
        exports:
            [
                kwcSide,
            ]
    })
//@formatter:on
export class kwcSideMod {

}
