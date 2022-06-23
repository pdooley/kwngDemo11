/**********************************************************************
 *
 * kw/kwcBdyMod.ts
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
import {NgModule} from "@angular/core";

import {kwNgViewCoreMod} from "@kwNgViewCore/kwNgViewCoreMod";

import {kwcBdyCtrMod} from "./ctr/kwcBdyCtrMod";
import {kwcBdyLftMod} from "./lft/kwcBdyLftMod";
import {kwcBdyRhtMod} from "./rht/kwcBdyRhtMod";

import {kwcBdy} from "./kwcBdy";

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcBdyCtrMod,
                kwcBdyLftMod,
                kwcBdyRhtMod,
            ],
        declarations:
            [
                kwcBdy,
            ],
        providers:
            [],
        exports:
            [
                kwcBdy,
            ]
    })
//@formatter:on
export class kwcBdyMod {

}
