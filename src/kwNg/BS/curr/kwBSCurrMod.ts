/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrMod.ts
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

import {kwBSCurr}               from './kwBSCurr';
import {kwBSCurrApi}            from './kwBSCurrApi';
import {kwBSCurrCtrlApi}        from './kwBSCurrCtrlApi';
import {kwBSCurrCtrlList}       from './kwBSCurrCtrlList';
import {kwBSCurrCtrlMdl}        from './kwBSCurrCtrlMdl';
import {kwBSCurrForm}           from './kwBSCurrForm';
import {kwBSCurrList}           from './kwBSCurrList';
import {kwBSCurrMdl}            from './kwBSCurrMdl';
import {kwBSCurrMsg}            from './kwBSCurrMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSCurr,
		kwBSCurrCtrlApi,
		kwBSCurrCtrlList,
		kwBSCurrCtrlMdl,
	],
	exports:
	[
		kwBSCurr,
		kwBSCurrCtrlApi,
		kwBSCurrCtrlList,
		kwBSCurrCtrlMdl,
	],
	providers:
	[
		kwBSCurrApi,
		kwBSCurrForm,
		kwBSCurrList,
		kwBSCurrMdl,
		kwBSCurrMsg,
	]
})
//@formatter:on
export class kwBSCurrMod
{

	constructor()
	{
		//console.log('kwBSCurrMod::constructor() called.');
	}
}
