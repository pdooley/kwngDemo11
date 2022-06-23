/**********************************************************************
 *
 * kwNg/state/signup/kwSignupMod.ts
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

import {kwSignup}                 from './kwSignup';
import {kwSignupApi}              from './kwSignupApi';
import {kwSignupCtrlApi}          from './kwSignupCtrlApi';
import {kwSignupCtrlList}         from './kwSignupCtrlList';
import {kwSignupCtrlMdl}          from './kwSignupCtrlMdl';
import {kwSignupForm}             from './kwSignupForm';
import {kwSignupList}             from './kwSignupList';
import {kwSignupMdl}              from './kwSignupMdl';
import {kwSignupMsg}              from './kwSignupMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwSignup,
		kwSignupCtrlApi,
		kwSignupCtrlList,
		kwSignupCtrlMdl,
	],
	exports:
	[
		kwSignup,
		kwSignupCtrlApi,
		kwSignupCtrlList,
		kwSignupCtrlMdl,
	],
	providers:
	[
		kwSignupApi,
		kwSignupForm,
		kwSignupList,
		kwSignupMdl,
		kwSignupMsg,
	]
})
//@formatter:on
export class kwSignupMod
{

	constructor()
	{
		//console.log('kwSignupMod::constructor() called.');
	}
}
