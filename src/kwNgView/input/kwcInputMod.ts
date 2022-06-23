/**********************************************************************
 *
 * kw/kwNgDlgMod.ts
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

import {kwcInput} from './kwcInput';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcInput,
            ],
        providers:
            [],
        exports:
            [
                kwcInput,
            ]
    })
//@formatter:on
export class kwcInputMod {

}
