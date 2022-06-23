/**********************************************************************
 *
 * kwNg/BS/tz/kwBSSrvcMod.ts
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

import {kwBSSrvc}                 from './kwBSSrvc';
import {kwBSSrvcApi}              from './kwBSSrvcApi';
import {kwBSSrvcCtrlApi}          from './kwBSSrvcCtrlApi';
import {kwBSSrvcCtrlList}         from './kwBSSrvcCtrlList';
import {kwBSSrvcCtrlMdl}          from './kwBSSrvcCtrlMdl';
import {kwBSSrvcForm}             from './kwBSSrvcForm';
import {kwBSSrvcList}             from './kwBSSrvcList';
import {kwBSSrvcMdl}              from './kwBSSrvcMdl';
import {kwBSSrvcMsg}              from './kwBSSrvcMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSSrvc,
		kwBSSrvcCtrlApi,
		kwBSSrvcCtrlList,
		kwBSSrvcCtrlMdl,
	],
	exports:
	[
		kwBSSrvc,
		kwBSSrvcCtrlApi,
		kwBSSrvcCtrlList,
		kwBSSrvcCtrlMdl,
	],
	providers:
	[
		kwBSSrvcApi,
		kwBSSrvcForm,
		kwBSSrvcList,
		kwBSSrvcMdl,
		kwBSSrvcMsg,
	]
})
//@formatter:on
export class kwBSSrvcMod
{

	constructor()
	{
		//console.log('kwBSSrvcMod::constructor() called.');
	}
}
