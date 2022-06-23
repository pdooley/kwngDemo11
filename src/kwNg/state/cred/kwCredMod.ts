/**********************************************************************
 *
 * kwNg/state/cred/kwCredMod.ts
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

import {kwCred}                 from './kwCred';
import {kwCredVal}              from './kwCredVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwCred,
	],
	exports:
	[
		kwCred,
	],
	providers:
	[
		kwCredVal,
	]
})
//@formatter:on
export class kwCredMod
{

	constructor()
	{
		//console.log('kwCredMod::constructor() called.');
	}
}
