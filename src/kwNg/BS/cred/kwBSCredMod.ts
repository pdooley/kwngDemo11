/**********************************************************************
 *
 * kwNg/BS/cred/kwBSCredMod.ts
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

import {kwBSCred}           from './kwBSCred';
import {kwBSCredCtrlVal}    from './kwBSCredCtrlVal';
import {kwBSCredVal}        from './kwBSCredVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSCred,
		kwBSCredCtrlVal,
	],
	exports:
	[
		kwBSCred,
		kwBSCredCtrlVal,
	],
	providers:
	[
		kwBSCredVal,
	]
})
//@formatter:on
export class kwBSCredMod
{

	constructor()
	{
		//console.log('kwBSCredMod::constructor() called.');
	}
}
