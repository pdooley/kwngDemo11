/**********************************************************************
 *
 * kwNg/BS/aws/kwBSAWSMod.ts
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

import {kwBSAWS}                from './kwBSAWS';
import {kwBSAWSCtrlVal}         from './kwBSAWSCtrlVal';
import {kwBSAWSVal}             from './kwBSAWSVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSAWS,
		kwBSAWSCtrlVal,
	],
	exports:
	[
		kwBSAWS,
		kwBSAWSCtrlVal,
	],
	providers:
	[
		kwBSAWSVal,
	]
})
//@formatter:on
export class kwBSAWSMod
{

	constructor()
	{
		//console.log('kwBSAWSMod::constructor() called.');
	}
}
