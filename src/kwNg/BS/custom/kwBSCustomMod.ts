/**********************************************************************
 *
 * kwNg/BS/custom/kwBSCustomMod.ts
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

import {kwBSCustom}             from './kwBSCustom';
import {kwBSCustomApi}          from './kwBSCustomApi';
import {kwBSCustomCtrlApi}      from './kwBSCustomCtrlApi';
import {kwBSCustomCtrlList}     from './kwBSCustomCtrlList';
import {kwBSCustomCtrlMsg}      from './kwBSCustomCtrlMsg';
import {kwBSCustomList}         from './kwBSCustomList';
import {kwBSCustomMsg}          from './kwBSCustomMsg';
import {kwBSCustomMsgFcty}      from './kwBSCustomMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSCustom,
		kwBSCustomCtrlApi,
		kwBSCustomCtrlList,
		kwBSCustomCtrlMsg
	],
	exports:
	[
		kwBSCustom,
		kwBSCustomCtrlApi,
		kwBSCustomCtrlList,
		kwBSCustomCtrlMsg
	],
	providers:
	[
		kwBSCustomApi,
		kwBSCustomList,
		kwBSCustomMsg,
		kwBSCustomMsgFcty
	]
})
//@formatter:on
export class kwBSCustomMod
{

	constructor()
	{
		//console.log('kwBSCustomMod::constructor() called.');
	}
}
