/**********************************************************************
 *
 * kwNg/state/redirect/kwRedirectMod.ts
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

import {kwRedirect}                 from './kwRedirect';
import {kwRedirectApi}              from './kwRedirectApi';
import {kwRedirectCtrlApi}          from './kwRedirectCtrlApi';
import {kwRedirectCtrlList}         from './kwRedirectCtrlList';
import {kwRedirectCtrlMdl}          from './kwRedirectCtrlMdl';
import {kwRedirectForm}             from './kwRedirectForm';
import {kwRedirectList}             from './kwRedirectList';
import {kwRedirectMdl}              from './kwRedirectMdl';
import {kwRedirectMsg}              from './kwRedirectMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwRedirect,
		kwRedirectCtrlApi,
		kwRedirectCtrlList,
		kwRedirectCtrlMdl,
	],
	exports:
	[
		kwRedirect,
		kwRedirectCtrlApi,
		kwRedirectCtrlList,
		kwRedirectCtrlMdl,
	],
	providers:
	[
		kwRedirectApi,
		kwRedirectForm,
		kwRedirectList,
		kwRedirectMdl,
		kwRedirectMsg,
	]
})
//@formatter:on
export class kwRedirectMod
{

	constructor()
	{
		//console.log('kwRedirectMod::constructor() called.');
	}
}
