/**********************************************************************
 *
 * kwNg/state/app/kwAppMod.ts
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

import { kwBSTraceAppMod }      from '@kwNgBS/traceApp/kwBSTraceAppMod'

import {kwApp}                  from './kwApp';
import {kwAppCtrlVal}           from './kwAppCtrlVal';
import {kwAppVal}               from './kwAppVal';


@NgModule(
{
	imports:
	[
		kwBSTraceAppMod
	],
	declarations:
	[
		kwApp,
		kwAppCtrlVal,
	],
	exports:
	[
		kwApp,
		kwAppCtrlVal,
	],
	providers:
	[
		kwAppVal,
	]
})
//@formatter:on
export class kwAppMod
{

	constructor()
	{
		//console.log('kwAppMod::constructor() called.');
	}
}
