/**********************************************************************
 *
 * kw/kwcTabsLinkTitleMod.ts
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

import {kwcTabsLinkTitle} from './kwcTabsLinkTitle';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcTabsLinkTitle,
            ],
        providers:
            [],
        exports:
            [
                kwcTabsLinkTitle,
            ]
    })
//@formatter:on
export class kwcTabsLinkTitleMod {

}
