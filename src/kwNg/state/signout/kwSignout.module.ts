//@formatter:off
import {NgModule}                from '@angular/core';

import {kwSignout}                from './kwSignout';
import {kwSignoutApi}             from './kwSignoutApi';
import {kwSignoutCtrlApi}         from './kwSignoutCtrlApi';
import {kwSignoutCtrlList}        from './kwSignoutCtrlList';
import {kwSignoutCtrlMdl}         from './kwSignoutCtrlMdl';
import {kwSignoutForm}            from './kwSignoutForm';
import {kwSignoutList}            from './kwSignoutList';
import {kwSignoutMdl}             from './kwSignoutMdl';
import {kwSignoutMsg}             from './kwSignoutMsg';
import {kwSignoutMsgFcty}         from './kwSignoutMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwSignout,
		kwSignoutCtrlApi,
		kwSignoutCtrlList,
		kwSignoutCtrlMdl
	],
	exports:
	[
		kwSignout,
		kwSignoutCtrlApi,
		kwSignoutCtrlList,
		kwSignoutCtrlMdl
	],
	providers:
	[
		kwSignoutApi,
		kwSignoutForm,
		kwSignoutList,
		kwSignoutMdl,
		kwSignoutMsg,
		kwSignoutMsgFcty
	]
})
//@formatter:on
export class kwSignoutModule
{

	constructor()
	{
		//console.log('kwSignoutModule::constructor() called.');
	}
}
