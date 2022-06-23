/**********************************************************************
 *
 * kwNg/state/mdl/kwMdlMod.ts
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

import {kwMdl}                 from './kwMdl';
import {kwMdlApi}              from './kwMdlApi';
import {kwMdlCtrlApi}          from './kwMdlCtrlApi';
import {kwMdlCtrlList}         from './kwMdlCtrlList';
import {kwMdlCtrlMdl}          from './kwMdlCtrlMdl';
import {kwMdlForm}             from './kwMdlForm';
import {kwMdlList}             from './kwMdlList';
import {kwMdlMdl}              from './kwMdlMdl';
import {kwMdlMsg}              from './kwMdlMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwMdl,
		kwMdlCtrlApi,
		kwMdlCtrlList,
		kwMdlCtrlMdl,
	],
	exports:
	[
		kwMdl,
		kwMdlCtrlApi,
		kwMdlCtrlList,
		kwMdlCtrlMdl,
	],
	providers:
	[
		kwMdlApi,
		kwMdlForm,
		kwMdlList,
		kwMdlMdl,
		kwMdlMsg,
	]
})
//@formatter:on
export class kwMdlMod
{

	constructor()
	{
		//console.log('kwMdlMod::constructor() called.');
	}
}
