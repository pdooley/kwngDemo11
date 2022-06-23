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

import {kwcFormMod} from "@kwNgView/form/kwcFormMod";
import {kwcRouterMod} from "@kwNgView/router/kwcRouterMod";
import {kwcRowsMod} from "@kwNgView/rows/kwcRowsMod";
import {kwcTableMod} from "@kwNgView/table/kwcTableMod";

import {kwcBdyCtr} from "./kwcBdyCtr";

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcFormMod,
                kwcRouterMod,
                kwcRowsMod,
                kwcTableMod,

            ],
        declarations:
            [
                kwcBdyCtr,
            ],
        providers:
            [],
        exports:
            [
                kwcBdyCtr,

                kwcFormMod,
                kwcRouterMod,
                kwcRowsMod,
                kwcTableMod,
            ]
    })
//@formatter:on
export class kwcBdyCtrMod {

}
