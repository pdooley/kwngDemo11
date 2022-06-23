/**********************************************************************
 *
 * kwNg/BS/trace/kwBSTraceMod.ts
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

import {kwBSTrace}             from './kwBSTrace';
import {kwBSTraceCtrlVal}      from './kwBSTraceCtrlVal';
import {kwBSTraceVal}          from './kwBSTraceVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSTrace,
		kwBSTraceCtrlVal,
	],
	exports:
	[
		kwBSTrace,
		kwBSTraceCtrlVal,
	],
	providers:
	[
		kwBSTraceVal,
	]
})
//@formatter:on
export class kwBSTraceMod
{

	constructor()
	{
		//console.log('kwBSTraceMod::constructor() called.');
	}
}
