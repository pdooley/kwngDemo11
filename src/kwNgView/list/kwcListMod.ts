/**********************************************************************
 *
 * kw/kwcListMod.ts
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

import {kwcList} from './kwcList';
import {kwcListCol} from './kwcListCol';


@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcList,
            ],
        providers:
            [
                kwcListCol,
            ],
        exports:
            [
                kwcList,
            ]
    })
//@formatter:on
export class kwcListMod {

}
