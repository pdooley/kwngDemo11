/**********************************************************************
 *
 * kwNg/BS/tz/kwBSApiMod.ts
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

import {kwBSApi}                 from './kwBSApi';
import {kwBSApiApi}              from './kwBSApiApi';
import {kwBSApiCtrlApi}          from './kwBSApiCtrlApi';
import {kwBSApiCtrlList}         from './kwBSApiCtrlList';
import {kwBSApiCtrlMdl}          from './kwBSApiCtrlMdl';
import {kwBSApiForm}             from './kwBSApiForm';
import {kwBSApiList}             from './kwBSApiList';
import {kwBSApiMdl}              from './kwBSApiMdl';
import {kwBSApiMsg}              from './kwBSApiMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSApi,
		kwBSApiCtrlApi,
		kwBSApiCtrlList,
		kwBSApiCtrlMdl,
	],
	exports:
	[
		kwBSApi,
		kwBSApiCtrlApi,
		kwBSApiCtrlList,
		kwBSApiCtrlMdl,
	],
	providers:
	[
		kwBSApiApi,
		kwBSApiForm,
		kwBSApiList,
		kwBSApiMdl,
		kwBSApiMsg,
	]
})
//@formatter:on
export class kwBSApiMod
{

	constructor()
	{
		//console.log('kwBSApiMod::constructor() called.');
	}
}
