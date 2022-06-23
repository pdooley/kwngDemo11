/**********************************************************************
 *
 * kwNg/BS/mdls/kwBSMdlsMod.ts
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

import {kwBSMdls}               from './kwBSMdls';
import {kwBSMdlsCtrlList}       from './kwBSMdlsCtrlList';
import {kwBSMdlsList}           from './kwBSMdlsList';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSMdls,
		kwBSMdlsCtrlList,
	],
	exports:
	[
		kwBSMdls,
		kwBSMdlsCtrlList,
	],
	providers:
	[
		kwBSMdlsList,
	]
})
//@formatter:on
export class kwBSMdlsMod
{

	constructor()
	{
		//console.log('kwBSMdlsMod::constructor() called.');
	}
}
