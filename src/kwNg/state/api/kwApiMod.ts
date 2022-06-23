/**********************************************************************
 *
 * kwNg/state/api/kwApiMod.ts
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

import {kwApi}                 from './kwApi';
import {kwApiApi}              from './kwApiApi';
import {kwApiCtrlApi}          from './kwApiCtrlApi';
import {kwApiCtrlList}         from './kwApiCtrlList';
import {kwApiCtrlMdl}          from './kwApiCtrlMdl';
import {kwApiForm}             from './kwApiForm';
import {kwApiList}             from './kwApiList';
import {kwApiMdl}              from './kwApiMdl';
import {kwApiMsg}              from './kwApiMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwApi,
		kwApiCtrlApi,
		kwApiCtrlList,
		kwApiCtrlMdl,
	],
	exports:
	[
		kwApi,
		kwApiCtrlApi,
		kwApiCtrlList,
		kwApiCtrlMdl,
	],
	providers:
	[
		kwApiApi,
		kwApiForm,
		kwApiList,
		kwApiMdl,
		kwApiMsg,
	]
})
//@formatter:on
export class kwApiMod
{

	constructor()
	{
		//console.log('kwApiMod::constructor() called.');
	}
}
