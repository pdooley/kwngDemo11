/**********************************************************************
 *
 * kwNg/BS/attrs/kwBSAttrsMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {kwBSAttrs}              from './kwBSAttrs';
import {kwBSAttrsCtrlVal}       from './kwBSAttrsCtrlVal';
import {kwBSAttrsVal}           from './kwBSAttrsVal';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBSAttrs,
        kwBSAttrsCtrlVal,
    ],
    exports:
    [
        kwBSAttrs,
        kwBSAttrsCtrlVal,
    ],
    providers:
    [
        kwBSAttrsVal,
    ]
})
//@formatter:on
export class kwBSAttrsMod
{

    constructor()
    {
        //console.log('kwBSAttrsMod::constructor() called.');
    }
}
