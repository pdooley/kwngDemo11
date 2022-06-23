/**********************************************************************
 *
 * kwNg/state/signin/kwSigninMod.ts
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

import {kwSignin}                 from './kwSignin';
import {kwSigninApi}              from './kwSigninApi';
import {kwSigninCtrlApi}          from './kwSigninCtrlApi';
import {kwSigninCtrlList}         from './kwSigninCtrlList';
import {kwSigninCtrlMdl}          from './kwSigninCtrlMdl';
import {kwSigninCtrlView}         from './kwSigninCtrlView';
import {kwSigninForm}             from './kwSigninForm';
import {kwSigninList}             from './kwSigninList';
import {kwSigninMdl}              from './kwSigninMdl';
import {kwSigninMsg}              from './kwSigninMsg';
import {kwSigninMsgFcty}          from './kwSigninMsgFcty';
import {kwSigninView}             from './kwSigninView';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwSignin,
		kwSigninCtrlApi,
		kwSigninCtrlList,
		kwSigninCtrlMdl,
		kwSigninCtrlView,
	],
	exports:
	[
		kwSignin,
		kwSigninCtrlApi,
		kwSigninCtrlList,
		kwSigninCtrlMdl,
		kwSigninCtrlView,
	],
	providers:
	[
		kwSigninApi,
		kwSigninForm,
		kwSigninList,
		kwSigninMdl,
		kwSigninMsg,
		kwSigninMsgFcty,
		kwSigninView,
	]
})
//@formatter:on
export class kwSigninMod
{

	constructor()
	{
		//console.log('kwSigninMod::constructor() called.');
	}
}
