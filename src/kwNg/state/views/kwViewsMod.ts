//@formatter:off
import {NgModule}                from '@angular/core';

import {kwViews}                from './kwViews';
import {kwViewsApi}             from './kwViewsApi';
import {kwViewsCtrlApi}         from './kwViewsCtrlApi';
import {kwViewsCtrlList}        from './kwViewsCtrlList';
import {kwViewsCtrlMsg}         from './kwViewsCtrlMsg';
import {kwViewsList}            from './kwViewsList';
import {kwViewsMsg}             from './kwViewsMsg';
import {kwViewsMsgFcty}         from './kwViewsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwViews,
		kwViewsCtrlApi,
		kwViewsCtrlList,
		kwViewsCtrlMsg,
	],
	exports:
	[
		kwViews,
		kwViewsCtrlApi,
		kwViewsCtrlList,
		kwViewsCtrlMsg,
	],
	providers:
	[
		kwViewsApi,
		kwViewsList,
		kwViewsMsg,
		kwViewsMsgFcty
	]
})
//@formatter:on
export class kwViewsMod
{

	constructor()
	{
		//console.log('kwViewsMod::constructor() called.');
	}
}
