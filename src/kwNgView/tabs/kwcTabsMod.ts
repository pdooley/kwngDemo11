/**********************************************************************
 *
 * kw/kwcTabsMod.ts
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

import {kwcTabsLinksMod} from './links/kwcTabsLinksMod';
import {kwcTabsTitleMod} from './title/kwcTabsTitleMod';

import {kwcTabs} from './kwcTabs';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcTabsLinksMod,
                kwcTabsTitleMod,
            ],
        declarations:
            [
                kwcTabs,
            ],
        providers:
            [],
        exports:
            [
                kwcTabs,
            ]
    })
//@formatter:on
export class kwcTabsMod {

}
