/**********************************************************************
 *
 * kwNg/state/http/kwHttpMod.ts
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

import {kwHttp}                 from './kwHttp';
import {kwHttpVal}              from './kwHttpVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwHttp,
	],
	exports:
	[
		kwHttp,
	],
	providers:
	[
		kwHttpVal,
	]
})
//@formatter:on
export class kwHttpMod
{

	constructor()
	{
		//console.log('kwHttpMod::constructor() called.');
	}
}
