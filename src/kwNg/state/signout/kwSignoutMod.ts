/**********************************************************************
 *
 * kwNg/state/signout/kwSignoutMod.ts
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

import {kwSignout}                 from './kwSignout';
import {kwSignoutApi}              from './kwSignoutApi';
import {kwSignoutCtrlApi}          from './kwSignoutCtrlApi';
import {kwSignoutCtrlList}         from './kwSignoutCtrlList';
import {kwSignoutCtrlMdl}          from './kwSignoutCtrlMdl';
import {kwSignoutForm}             from './kwSignoutForm';
import {kwSignoutList}             from './kwSignoutList';
import {kwSignoutMdl}              from './kwSignoutMdl';
import {kwSignoutMsg}              from './kwSignoutMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwSignout,
		kwSignoutCtrlApi,
		kwSignoutCtrlList,
		kwSignoutCtrlMdl,
	],
	exports:
	[
		kwSignout,
		kwSignoutCtrlApi,
		kwSignoutCtrlList,
		kwSignoutCtrlMdl,
	],
	providers:
	[
		kwSignoutApi,
		kwSignoutForm,
		kwSignoutList,
		kwSignoutMdl,
		kwSignoutMsg,
	]
})
//@formatter:on
export class kwSignoutMod
{

	constructor()
	{
		//console.log('kwSignoutMod::constructor() called.');
	}
}
