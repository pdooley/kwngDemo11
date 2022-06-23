/**********************************************************************
 *
 * kwNg/state/mdls/kwMdlsMod.ts
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

import {kwMdls}                 from './kwMdls';
import {kwMdlsApi}              from './kwMdlsApi';
import {kwMdlsCtrlApi}          from './kwMdlsCtrlApi';
import {kwMdlsCtrlList}         from './kwMdlsCtrlList';
import {kwMdlsCtrlMsg}          from './kwMdlsCtrlMsg';
import {kwMdlsList}             from './kwMdlsList';
import {kwMdlsMsg}              from './kwMdlsMsg';
import {kwMdlsMsgFcty}          from './kwMdlsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwMdls,
		kwMdlsCtrlApi,
		kwMdlsCtrlList,
		kwMdlsCtrlMsg,
	],
	exports:
	[
		kwMdls,
		kwMdlsCtrlApi,
		kwMdlsCtrlList,
		kwMdlsCtrlMsg,
	],
	providers:
	[
		kwMdlsApi,
		kwMdlsList,
		kwMdlsMsg,
		kwMdlsMsgFcty,
	]
})
//@formatter:on
export class kwMdlsMod
{

	constructor()
	{
		//console.log('kwMdlsMod::constructor() called.');
	}
}
