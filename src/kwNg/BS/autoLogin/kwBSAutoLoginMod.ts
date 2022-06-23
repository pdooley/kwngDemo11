/**********************************************************************
 *
 * kwNg/BS/autoLogin/kwBSAutoLoginMod.ts
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

import {kwBSAutoLogin}             from './kwBSAutoLogin';
import {kwBSAutoLoginCtrlVal}      from './kwBSAutoLoginCtrlVal';
import {kwBSAutoLoginVal}          from './kwBSAutoLoginVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSAutoLogin,
		kwBSAutoLoginCtrlVal,
	],
	exports:
	[
		kwBSAutoLogin,
		kwBSAutoLoginCtrlVal,
	],
	providers:
	[
		kwBSAutoLoginVal,
	]
})
//@formatter:on
export class kwBSAutoLoginMod
{

	constructor()
	{
		//console.log('kwBSAutoLoginMod::constructor() called.');
	}
}
