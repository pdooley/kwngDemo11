/**********************************************************************
 *
 * kwNg/BS/apis/kwBSApisMod.ts
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

import {kwBSApis}               from './kwBSApis';
import {kwBSApisCtrlList}       from './kwBSApisCtrlList';
import {kwBSApisList}           from './kwBSApisList';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSApis,
		kwBSApisCtrlList,
	],
	exports:
	[
		kwBSApis,
		kwBSApisCtrlList,
	],
	providers:
	[
		kwBSApisList,
	]
})
//@formatter:on
export class kwBSApisMod
{

	constructor()
	{
		//console.log('kwBSApisMod::constructor() called.');
	}
}
