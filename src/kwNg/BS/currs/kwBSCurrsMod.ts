/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsMod.ts
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

import {kwBSCurrs}              from './kwBSCurrs';
import {kwBSCurrsApi}           from './kwBSCurrsApi';
import {kwBSCurrsCtrlApi}       from './kwBSCurrsCtrlApi';
import {kwBSCurrsCtrlMap}       from './kwBSCurrsCtrlMap';
import {kwBSCurrsCtrlMsg}       from './kwBSCurrsCtrlMsg';
import {kwBSCurrsMap}           from './kwBSCurrsMap';
import {kwBSCurrsMsg}           from './kwBSCurrsMsg';
import {kwBSCurrsMsgFcty}       from './kwBSCurrsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSCurrs,
		kwBSCurrsCtrlApi,
		kwBSCurrsCtrlMap,
		kwBSCurrsCtrlMsg,
	],
	exports:
	[
		kwBSCurrs,
		kwBSCurrsCtrlApi,
		kwBSCurrsCtrlMap,
		kwBSCurrsCtrlMsg,
	],
	providers:
	[
		kwBSCurrsApi,
		kwBSCurrsMap,
		kwBSCurrsMsg,
		kwBSCurrsMsgFcty,
	]
})
//@formatter:on
export class kwBSCurrsMod
{

	constructor()
	{
		//console.log('kwBSCurrsMod::constructor() called.');
	}
}
