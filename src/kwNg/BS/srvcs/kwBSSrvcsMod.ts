/**********************************************************************
 *
 * kwNg/BS/srvcs/kwBSSrvcsMod.ts
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

import {kwBSSrvcs}              from './kwBSSrvcs';
import {kwBSSrvcsCtrlMap}       from './kwBSSrvcsCtrlMap';
import {kwBSSrvcsMap}           from './kwBSSrvcsMap';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSSrvcs,
		kwBSSrvcsCtrlMap,
	],
	exports:
	[
		kwBSSrvcs,
		kwBSSrvcsCtrlMap,
	],
	providers:
	[
		kwBSSrvcsMap,
	]
})
//@formatter:on
export class kwBSSrvcsMod
{

	constructor()
	{
		//console.log('kwBSSrvcsMod::constructor() called.');
	}
}
