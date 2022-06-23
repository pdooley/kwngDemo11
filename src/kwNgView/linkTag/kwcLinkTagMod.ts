/**********************************************************************
 *
 * kw/kwcLinkTagMod.ts
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

import {kwcLinkTag} from './kwcLinkTag';


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
                kwcLinkTag,
            ],
        providers:
            [],
        exports:
            [
                kwcLinkTag,
            ]
    })
//@formatter:on
export class kwcLinkTagMod {

}
