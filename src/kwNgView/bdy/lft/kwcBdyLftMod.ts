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

import {kwcNavMod} from "@kwNgView/nav/kwcNavMod";
import {kwcSideMod} from "@kwNgView/side/kwcSideMod";
import {kwcOptsMod} from "@kwNgView/opts/kwcOptsMod";
import {kwcTabsMod} from "@kwNgView/tabs/kwcTabsMod";

import {kwcBdyLft} from "./kwcBdyLft";

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcNavMod,
                kwcSideMod,
                kwcOptsMod,
                kwcTabsMod,
            ],
        declarations:
            [
                kwcBdyLft,
            ],
        providers:
            [],
        exports:
            [
                kwcBdyLft,
            ]
    })
//@formatter:on
export class kwcBdyLftMod {

}
