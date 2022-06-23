/**********************************************************************
 *
 * kwNg/BS/traceApp/kwBSTraceAppMod.ts
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
import {NgModule}                   from '@angular/core';

import {kwBSTraceApp}             from './kwBSTraceApp';
import {kwBSTraceAppCtrlVal}      from './kwBSTraceAppCtrlVal';
import {kwBSTraceAppVal}          from './kwBSTraceAppVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSTraceApp,
		kwBSTraceAppCtrlVal,
	],
	exports:
	[
		kwBSTraceApp,
		kwBSTraceAppCtrlVal,
	],
	providers:
	[
		kwBSTraceAppVal,
	]
})
//@formatter:on
export class kwBSTraceAppMod
{

	constructor()
	{
		//console.log('kwBSTraceAppMod::constructor() called.');
	}
}
