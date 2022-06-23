//@formatter:off
import {NgModule}                from '@angular/core';

import {kwApis}                from './kwApis';
import {kwApisApi}             from './kwApisApi';
import {kwApisCtrlApi}         from './kwApisCtrlApi';
import {kwApisCtrlList}        from './kwApisCtrlList';
import {kwApisCtrlMsg}         from './kwApisCtrlMsg';
import {kwApisList}            from './kwApisList';
import {kwApisMsg}             from './kwApisMsg';
import {kwApisMsgFcty}         from './kwApisMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwApis,
		kwApisCtrlApi,
		kwApisCtrlList,
		kwApisCtrlMsg,
	],
	exports:
	[
		kwApis,
		kwApisCtrlApi,
		kwApisCtrlList,
		kwApisCtrlMsg,
	],
	providers:
	[
		kwApisApi,
		kwApisList,
		kwApisMsg,
		kwApisMsgFcty
	]
})
//@formatter:on
export class kwApisMod
{

	constructor()
	{
		//console.log('kwApisMod::constructor() called.');
	}
}
