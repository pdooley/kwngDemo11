/**********************************************************************
 *
 * kwNg/BS/tz/kwBSMdlMod.ts
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

import {kwBSMdl}                 from './kwBSMdl';
import {kwBSMdlApi}              from './kwBSMdlApi';
import {kwBSMdlCtrlApi}          from './kwBSMdlCtrlApi';
import {kwBSMdlCtrlList}         from './kwBSMdlCtrlList';
import {kwBSMdlCtrlMdl}          from './kwBSMdlCtrlMdl';
import {kwBSMdlForm}             from './kwBSMdlForm';
import {kwBSMdlList}             from './kwBSMdlList';
import {kwBSMdlMdl}              from './kwBSMdlMdl';
import {kwBSMdlMsg}              from './kwBSMdlMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSMdl,
		kwBSMdlCtrlApi,
		kwBSMdlCtrlList,
		kwBSMdlCtrlMdl,
	],
	exports:
	[
		kwBSMdl,
		kwBSMdlCtrlApi,
		kwBSMdlCtrlList,
		kwBSMdlCtrlMdl,
	],
	providers:
	[
		kwBSMdlApi,
		kwBSMdlForm,
		kwBSMdlList,
		kwBSMdlMdl,
		kwBSMdlMsg,
	]
})
//@formatter:on
export class kwBSMdlMod
{

	constructor()
	{
		//console.log('kwBSMdlMod::constructor() called.');
	}
}
