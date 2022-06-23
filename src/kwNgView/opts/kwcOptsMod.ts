/**********************************************************************
 *
 * app/comp/opts/kwcOptsMod.ts
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

import {kwcOptsChkMod} from './chk/kwcOptsChkMod';
import {kwcTitleMod} from '@kwNgView/title/kwcTitleMod';
import {kwNgViewCoreMod} from '@kwNgViewCore/kwNgViewCoreMod';


import {kwcOpts} from './kwcOpts';

@NgModule(
    {
        imports:
            [
                kwcOptsChkMod,
                kwcTitleMod,
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcOpts,
            ],
        providers:
            [],
        exports:
            [
                kwcOpts,

            ]
    })
//@formatter:on
export class kwcOptsMod {

}
