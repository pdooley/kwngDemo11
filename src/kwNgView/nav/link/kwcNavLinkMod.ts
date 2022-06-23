/**********************************************************************
 *
 * kw/kwcNavLinkMod.ts
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

import {kwcNavLink} from './kwcNavLink';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcImgMod,
                kwcTitleMod,
            ],
        declarations:
            [
                kwcNavLink,
            ],
        providers:
            [],
        exports:
            [
                kwcNavLink,
            ]
    })
//@formatter:on
export class kwcNavLinkMod {

}
