/**********************************************************************
 *
 * kwNg/state/acc/kwAccMod.ts
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
import {NgModule}                   from '@angular/core';

import {kwAcc}                  from './kwAcc';
import {kwAccApi}               from './kwAccApi';
import {kwAccCtrlApi}           from './kwAccCtrlApi';
import {kwAccCtrlList}          from './kwAccCtrlList';
import {kwAccCtrlMdl}           from './kwAccCtrlMdl';
import {kwAccForm}              from './kwAccForm';
import {kwAccList}              from './kwAccList';
import {kwAccMdl}               from './kwAccMdl';
import {kwAccMsg}               from './kwAccMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwAcc,
		kwAccCtrlApi,
		kwAccCtrlList,
		kwAccCtrlMdl,
	],
	exports:
	[
		kwAcc,
		kwAccCtrlApi,
		kwAccCtrlList,
		kwAccCtrlMdl,
	],
	providers:
	[
		kwAccApi,
		kwAccForm,
		kwAccList,
		kwAccMdl,
		kwAccMsg,
	]
})
//@formatter:on
export class kwAccMod
{

	constructor()
	{
		//console.log('kwAccMod::constructor() called.');
	}
}
