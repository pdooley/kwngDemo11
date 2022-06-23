/**********************************************************************
 *
 * kwNg/state/org/kwOrgMod.ts
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

import {kwOrg}                 from './kwOrg';
import {kwOrgApi}              from './kwOrgApi';
import {kwOrgCtrlApi}          from './kwOrgCtrlApi';
import {kwOrgCtrlList}         from './kwOrgCtrlList';
import {kwOrgCtrlMdl}          from './kwOrgCtrlMdl';
import {kwOrgForm}             from './kwOrgForm';
import {kwOrgList}             from './kwOrgList';
import {kwOrgMdl}              from './kwOrgMdl';
import {kwOrgMsg}              from './kwOrgMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwOrg,
		kwOrgCtrlApi,
		kwOrgCtrlList,
		kwOrgCtrlMdl,
	],
	exports:
	[
		kwOrg,
		kwOrgCtrlApi,
		kwOrgCtrlList,
		kwOrgCtrlMdl,
	],
	providers:
	[
		kwOrgApi,
		kwOrgForm,
		kwOrgList,
		kwOrgMdl,
		kwOrgMsg,
	]
})
//@formatter:on
export class kwOrgMod
{

	constructor()
	{
		//console.log('kwOrgMod::constructor() called.');
	}
}
