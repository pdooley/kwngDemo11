/**********************************************************************
 *
 * kwNg/BS/tz/kwBSTZsMod.ts
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

import {kwBSTZs}              from './kwBSTZs';
import {kwBSTZsApi}           from './kwBSTZsApi';
import {kwBSTZsCtrlApi}       from './kwBSTZsCtrlApi';
import {kwBSTZsCtrlMap}       from './kwBSTZsCtrlMap';
import {kwBSTZsCtrlMsg}       from './kwBSTZsCtrlMsg';
import {kwBSTZsMap}           from './kwBSTZsMap';
import {kwBSTZsMsg}           from './kwBSTZsMsg';
import {kwBSTZsMsgFcty}       from './kwBSTZsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSTZs,
		kwBSTZsCtrlApi,
		kwBSTZsCtrlMap,
		kwBSTZsCtrlMsg,
	],
	exports:
	[
		kwBSTZs,
		kwBSTZsCtrlApi,
		kwBSTZsCtrlMap,
		kwBSTZsCtrlMsg,
	],
	providers:
	[
		kwBSTZsApi,
		kwBSTZsMap,
		kwBSTZsMsg,
		kwBSTZsMsgFcty,
	]
})
//@formatter:on
export class kwBSTZsMod
{

	constructor()
	{
		//console.log('kwBSTZsMod::constructor() called.');
	}
}
