/**********************************************************************
 *
 * kwNg/BS/mode/kwBSModeMod.ts
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

import {kwBSMode}               from './kwBSMode';
import {kwBSModeCtrlVal}        from './kwBSModeCtrlVal';
import {kwBSModeVal}            from './kwBSModeVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSMode,
		kwBSModeCtrlVal,
	],
	exports:
	[
		kwBSMode,
		kwBSModeCtrlVal,
	],
	providers:
	[
		kwBSModeVal,
	]
})
//@formatter:on
export class kwBSModeMod
{

	constructor()
	{
		//console.log('kwBSModeMod::constructor() called.');
	}
}
