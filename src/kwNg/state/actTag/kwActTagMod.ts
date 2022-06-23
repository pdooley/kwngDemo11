/**********************************************************************
 *
 * kwNg/state/actTag/kwActTagMod.ts
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

import {kwActTag}                 from './kwActTag';
import {kwActTagApi}              from './kwActTagApi';
import {kwActTagCtrlApi}          from './kwActTagCtrlApi';
import {kwActTagCtrlList}         from './kwActTagCtrlList';
import {kwActTagCtrlMdl}          from './kwActTagCtrlMdl';
import {kwActTagForm}             from './kwActTagForm';
import {kwActTagList}             from './kwActTagList';
import {kwActTagMdl}              from './kwActTagMdl';
import {kwActTagMsg}              from './kwActTagMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwActTag,
		kwActTagCtrlApi,
		kwActTagCtrlList,
		kwActTagCtrlMdl,
	],
	exports:
	[
		kwActTag,
		kwActTagCtrlApi,
		kwActTagCtrlList,
		kwActTagCtrlMdl,
	],
	providers:
	[
		kwActTagApi,
		kwActTagForm,
		kwActTagList,
		kwActTagMdl,
		kwActTagMsg,
	]
})
//@formatter:on
export class kwActTagMod
{

	constructor()
	{
		//console.log('kwActTagMod::constructor() called.');
	}
}
