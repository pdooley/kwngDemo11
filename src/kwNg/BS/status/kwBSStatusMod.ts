/**********************************************************************
 *
 * kwNg/BS/status/kwBSStatusMod.ts
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

import {kwBSStatus}             from './kwBSStatus';
import {kwBSStatusCtrlVal}      from './kwBSStatusCtrlVal';
import {kwBSStatusVal}          from './kwBSStatusVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSStatus,
		kwBSStatusCtrlVal,
	],
	exports:
	[
		kwBSStatus,
		kwBSStatusCtrlVal,
	],
	providers:
	[
		kwBSStatusVal,
	]
})
//@formatter:on
export class kwBSStatusMod
{

	constructor()
	{
		//console.log('kwBSStatusMod::constructor() called.');
	}
}
