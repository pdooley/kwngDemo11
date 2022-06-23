/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsMod.ts
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

import {kwBSLangs}              from './kwBSLangs';
import {kwBSLangsApi}           from './kwBSLangsApi';
import {kwBSLangsCtrlApi}       from './kwBSLangsCtrlApi';
import {kwBSLangsCtrlMap}       from './kwBSLangsCtrlMap';
import {kwBSLangsCtrlMsg}       from './kwBSLangsCtrlMsg';
import {kwBSLangsMap}           from './kwBSLangsMap';
import {kwBSLangsMsg}           from './kwBSLangsMsg';
import {kwBSLangsMsgFcty}       from './kwBSLangsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSLangs,
		kwBSLangsCtrlApi,
		kwBSLangsCtrlMap,
		kwBSLangsCtrlMsg,
	],
	exports:
	[
		kwBSLangs,
		kwBSLangsCtrlApi,
		kwBSLangsCtrlMap,
		kwBSLangsCtrlMsg,
	],
	providers:
	[
		kwBSLangsApi,
		kwBSLangsMap,
		kwBSLangsMsg,
		kwBSLangsMsgFcty,
	]
})
//@formatter:on
export class kwBSLangsMod
{

	constructor()
	{
		//console.log('kwBSLangsMod::constructor() called.');
	}
}
