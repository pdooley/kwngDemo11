/**********************************************************************
 *
 * kwNg/BS/rslt/kwBSRsltMod.ts
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
import {NgModule}           from '@angular/core';

import {kwBSRslt}           from './kwBSRslt';
import {kwBSRsltCtrlVal}    from './kwBSRsltCtrlVal';
import {kwBSRsltVal}        from './kwBSRsltVal';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBSRslt,
        kwBSRsltCtrlVal,
    ],
    exports:
    [
        kwBSRslt,
        kwBSRsltCtrlVal,
    ],
    providers:
    [
        kwBSRsltVal,
    ]
})
//@formatter:on
export class kwBSRsltMod
{

    constructor()
    {
        //console.log('kwBSRsltMod::constructor() called.');
    }
}
