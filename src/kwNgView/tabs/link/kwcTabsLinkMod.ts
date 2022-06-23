/**********************************************************************
 *
 * kw/kwcTabsLinkMod.ts
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
import {kwcTabsLinkTitleMod} from './title/kwcTabsLinkTitleMod';

import {kwcTabsLink} from './kwcTabsLink';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcImgMod,
                kwcTabsLinkTitleMod,
            ],
        declarations:
            [
                kwcTabsLink,
            ],
        providers:
            [],
        exports:
            [
                kwcTabsLink,
            ]
    })
//@formatter:on
export class kwcTabsLinkMod {

}
