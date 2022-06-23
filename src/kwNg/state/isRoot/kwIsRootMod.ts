/**********************************************************************
 *
 * kwNg/state/isRoot/kwIsRootMod.ts
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

import {kwIsRoot}                 from './kwIsRoot';
import {kwIsRootVal}              from './kwIsRootVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwIsRoot,
	],
	exports:
	[
		kwIsRoot,
	],
	providers:
	[
		kwIsRootVal,
	]
})
//@formatter:on
export class kwIsRootMod
{

	constructor()
	{
		//console.log('kwIsRootMod::constructor() called.');
	}
}
