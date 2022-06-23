/**********************************************************************
 *
 * kw/kwcHdrMod.ts
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

import {kwcHdrCtrMod} from './ctr/kwcHdrCtrMod';
import {kwcHdrLftMod} from './lft/kwcHdrLftMod';
import {kwcHdrRhtMod} from './rht/kwcHdrRhtMod';

import {kwcHdr} from './kwcHdr';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcHdrCtrMod,
                kwcHdrLftMod,
                kwcHdrRhtMod,
            ],
        declarations:
            [
                kwcHdr,
            ],
        providers:
            [],
        exports:
            [
                kwcHdr,
            ]
    })
//@formatter:on
export class kwcHdrMod {

}
