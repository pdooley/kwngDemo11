/**********************************************************************
 *
 * kwNg/BS/tz/kwBSInitMod.ts
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

import {kwBSInit}                 from './kwBSInit';
import {kwBSInitApi}              from './kwBSInitApi';
import {kwBSInitCtrlApi}          from './kwBSInitCtrlApi';
import {kwBSInitCtrlList}         from './kwBSInitCtrlList';
import {kwBSInitList}             from './kwBSInitList';
import {kwBSInitMsg}              from './kwBSInitMsg';
import {kwBSInitMsgFcty}          from './kwBSInitMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSInit,
		kwBSInitCtrlApi,
		kwBSInitCtrlList,
	],
	exports:
	[
		kwBSInit,
		kwBSInitCtrlApi,
		kwBSInitCtrlList,
	],
	providers:
	[
		kwBSInitApi,
		kwBSInitList,
		kwBSInitMsg,
		kwBSInitMsgFcty,
	]
})
//@formatter:on
export class kwBSInitMod
{

	constructor()
	{
		//console.log('kwBSInitMod::constructor() called.');
	}
}
