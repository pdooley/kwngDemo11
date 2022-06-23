/**********************************************************************
 *
 * kwNg/state/accType/kwAccTypeMod.ts
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

import {kwAccType}              from './kwAccType';
import {kwAccTypeCtrlVal}       from './kwAccTypeCtrlVal';
import {kwAccTypeVal}           from './kwAccTypeVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwAccType,
		kwAccTypeCtrlVal,
	],
	exports:
	[
		kwAccType,
		kwAccTypeCtrlVal,
	],
	providers:
	[
		kwAccTypeVal,
	]
})
//@formatter:on
export class kwAccTypeMod
{

	constructor()
	{
		//console.log('kwAccTypeMod::constructor() called.');
	}
}
