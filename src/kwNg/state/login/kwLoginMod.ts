/**********************************************************************
 *
 * kwNg/state/login/kwLoginMod.ts
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

import {kwLogin}                 from './kwLogin';
import {kwLoginVal}             from './kwLoginVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwLogin,
	],
	exports:
	[
		kwLogin,
	],
	providers:
	[
		kwLoginVal,
	]
})
//@formatter:on
export class kwLoginMod
{

	constructor()
	{
		//console.log('kwLoginMod::constructor() called.');
	}
}
