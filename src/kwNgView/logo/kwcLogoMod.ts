/**********************************************************************
 *
 * kw/kwcLogoMod.ts
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

import {kwcLogo} from './kwcLogo';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcLogo,
            ],
        providers:
            [],
        exports:
            [
                kwcLogo,
            ]
    })
//@formatter:on
export class kwcLogoMod {

}
