/**********************************************************************
 *
 * kwNg/BS/disp/kwBSDispMod.ts
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

import {kwBSDisp}             from './kwBSDisp';
import {kwBSDispCtrlVal}      from './kwBSDispCtrlVal';
import {kwBSDispVal}          from './kwBSDispVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSDisp,
		kwBSDispCtrlVal,
	],
	exports:
	[
		kwBSDisp,
		kwBSDispCtrlVal,
	],
	providers:
	[
		kwBSDispVal,
	]
})
//@formatter:on
export class kwBSDispMod
{

	constructor()
	{
		//console.log('kwBSDispMod::constructor() called.');
	}
}
