/**********************************************************************
 *
 * kwNg/state/err/kwErrMod.ts
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

import {kwErr}                 from './kwErr';
import {kwErrCtrlVal}         from './kwErrCtrlVal';
import {kwErrVal}             from './kwErrVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwErr,
		kwErrCtrlVal,
	],
	exports:
	[
		kwErr,
		kwErrCtrlVal,
	],
	providers:
	[
		kwErrVal,
	]
})
//@formatter:on
export class kwErrMod
{

	constructor()
	{
		//console.log('kwErrMod::constructor() called.');
	}
}
