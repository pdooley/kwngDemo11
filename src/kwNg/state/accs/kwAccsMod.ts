/**********************************************************************
 *
 * kwNg/state/accs/kwAccsMod.ts
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

import {kwAccs}                 from './kwAccs';
import {kwAccsApi}              from './kwAccsApi';
import {kwAccsCtrlApi}          from './kwAccsCtrlApi';
import {kwAccsCtrlList}         from './kwAccsCtrlList';
import {kwAccsList}             from './kwAccsList';
import {kwAccsMsg}              from './kwAccsMsg';
import {kwAccsMsgFcty}          from './kwAccsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwAccs,
		kwAccsCtrlApi,
		kwAccsCtrlList,
	],
	exports:
	[
		kwAccs,
		kwAccsCtrlApi,
		kwAccsCtrlList,
	],
	providers:
	[
		kwAccsApi,
		kwAccsList,
		kwAccsMsg,
		kwAccsMsgFcty,
	]
})
//@formatter:on
export class kwAccsMod
{

	constructor()
	{
		//console.log('kwAccsMod::constructor() called.');
	}
}
