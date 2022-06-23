/**********************************************************************
 *
 * kwNg/BS/user/kwBSUserMod.ts
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
import {ModuleWithProviders}    from '@angular/core';

import {kwBSUser}               from './kwBSUser';
import {kwBSUserCtrlList}       from './kwBSUserCtrlList';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSUser,
		kwBSUserCtrlList,
	],
	exports:
	[
		kwBSUser,
		kwBSUserCtrlList,
	],
	providers:
	[
	]
})
//@formatter:on
export class kwBSUserMod
{

	constructor()
	{
		//console.log('kwBSUserMod::constructor() called.');
	}


}
