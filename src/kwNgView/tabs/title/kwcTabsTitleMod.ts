/**********************************************************************
 *
 * kw/kwcTabsTitleMod.ts
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

import {kwcTabsTitle} from './kwcTabsTitle';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcTabsTitle,
            ],
        providers:
            [],
        exports:
            [
                kwcTabsTitle,
            ]
    })
//@formatter:on
export class kwcTabsTitleMod {

}
