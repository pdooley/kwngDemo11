/**********************************************************************
 *
 * kwNg/state/actTags/kwActTagsMod.ts
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

import {kwActTags}                 from './kwActTags';
import {kwActTagsApi}              from './kwActTagsApi';
import {kwActTagsCtrlApi}          from './kwActTagsCtrlApi';
import {kwActTagsCtrlList}         from './kwActTagsCtrlList';
import {kwActTagsList}             from './kwActTagsList';
import {kwActTagsMsg}              from './kwActTagsMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwActTags,
		kwActTagsCtrlApi,
		kwActTagsCtrlList,
	],
	exports:
	[
		kwActTags,
		kwActTagsCtrlApi,
		kwActTagsCtrlList,
	],
	providers:
	[
		kwActTagsApi,
		kwActTagsList,
		kwActTagsMsg,
	]
})
//@formatter:on
export class kwActTagsMod
{

	constructor()
	{
		//console.log('kwActTagsMod::constructor() called.');
	}
}
