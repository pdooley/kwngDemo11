/**********************************************************************
 *
 * kwNg/BS/tz/kwBSTokenMod.ts
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

import {kwBSToken}                 from './kwBSToken';
import {kwBSTokenApi}              from './kwBSTokenApi';
import {kwBSTokenCtrlApi}          from './kwBSTokenCtrlApi';
import {kwBSTokenCtrlList}         from './kwBSTokenCtrlList';
import {kwBSTokenCtrlMdl}          from './kwBSTokenCtrlMdl';
import {kwBSTokenForm}             from './kwBSTokenForm';
import {kwBSTokenList}             from './kwBSTokenList';
import {kwBSTokenMdl}              from './kwBSTokenMdl';
import {kwBSTokenMsg}              from './kwBSTokenMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSToken,
		kwBSTokenCtrlApi,
		kwBSTokenCtrlList,
		kwBSTokenCtrlMdl,
	],
	exports:
	[
		kwBSToken,
		kwBSTokenCtrlApi,
		kwBSTokenCtrlList,
		kwBSTokenCtrlMdl,
	],
	providers:
	[
		kwBSTokenApi,
		kwBSTokenForm,
		kwBSTokenList,
		kwBSTokenMdl,
		kwBSTokenMsg,
	]
})
//@formatter:on
export class kwBSTokenMod
{

	constructor()
	{
		//console.log('kwBSTokenMod::constructor() called.');
	}
}
