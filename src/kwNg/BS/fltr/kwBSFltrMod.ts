/**********************************************************************
 *
 * kwNg/BS/fltr/kwBSFltrMod.ts
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

import {kwBSFltr}           from './kwBSFltr';
import {kwBSFltrCtrlVal}    from './kwBSFltrCtrlVal';
import {kwBSFltrVal}        from './kwBSFltrVal';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBSFltr,
        kwBSFltrCtrlVal,
    ],
    exports:
    [
        kwBSFltr,
        kwBSFltrCtrlVal,
    ],
    providers:
    [
        kwBSFltrVal,
    ]
})
//@formatter:on
export class kwBSFltrMod
{

    constructor()
    {
        //console.log('kwBSFltrMod::constructor() called.');
    }
}
