/**********************************************************************
 *
 * kwNg/state/loginErr/kwLoginErrMod.ts
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

import {kwLoginErr}                 from './kwLoginErr';
import {kwLoginErrVal}             from './kwLoginErrVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwLoginErr,
	],
	exports:
	[
		kwLoginErr,
	],
	providers:
	[
		kwLoginErrVal,
	]
})
//@formatter:on
export class kwLoginErrMod
{

	constructor()
	{
		//console.log('kwLoginErrMod::constructor() called.');
	}
}
