/**********************************************************************
 *
 * kwNg/BS/routes/kwBSRoutesMod.ts
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

import {kwBSRoutes}             from './kwBSRoutes';
import {kwBSRoutesCtrlVal}      from './kwBSRoutesCtrlVal';
import {kwBSRoutesVal}          from './kwBSRoutesVal';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSRoutes,
		kwBSRoutesCtrlVal,
	],
	exports:
	[
		kwBSRoutes,
		kwBSRoutesCtrlVal,
	],
	providers:
	[
		kwBSRoutesVal,
	]
})
//@formatter:on
export class kwBSRoutesMod
{

	constructor()
	{
		//console.log('kwBSRoutesMod::constructor() called.');
	}
}
