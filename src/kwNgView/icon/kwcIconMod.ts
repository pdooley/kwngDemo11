/**********************************************************************
 *
 * kw/kwcIconMod.ts
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

import {kwcIcon} from './kwcIcon';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcIcon,
            ],
        providers:
            [],
        exports:
            [
                kwcIcon,
            ]
    })
//@formatter:on
export class kwcIconMod {

}
