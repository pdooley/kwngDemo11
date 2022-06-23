/**********************************************************************
 *
 * kw/kwcTabsLinksMod.ts
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

import {kwcTabsLinkMod} from '../link/kwcTabsLinkMod';

import {kwcTabsLinks} from './kwcTabsLinks';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcTabsLinkMod,
            ],
        declarations:
            [
                kwcTabsLinks,
            ],
        providers:
            [],
        exports:
            [
                kwcTabsLinks,
            ]
    })
//@formatter:on
export class kwcTabsLinksMod {

}
