//@formatter:off
import {NgModule}                from '@angular/core';

import {kwInits}                from './kwInits';
import {kwInitsApi}             from './kwInitsApi';
import {kwInitsCtrlApi}         from './kwInitsCtrlApi';
import {kwInitsCtrlList}        from './kwInitsCtrlList';
import {kwInitsCtrlMsg}         from './kwInitsCtrlMsg';
import {kwInitsList}            from './kwInitsList';
import {kwInitsMsg}             from './kwInitsMsg';
import {kwInitsMsgFcty}         from './kwInitsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwInits,
		kwInitsCtrlApi,
		kwInitsCtrlList,
		kwInitsCtrlMsg,
	],
	exports:
	[
		kwInits,
		kwInitsCtrlApi,
		kwInitsCtrlList,
		kwInitsCtrlMsg,
	],
	providers:
	[
		kwInitsApi,
		kwInitsList,
		kwInitsMsg,
		kwInitsMsgFcty
	]
})
//@formatter:on
export class kwInitsMod
{

	constructor()
	{
		//console.log('kwInitsMod::constructor() called.');
	}
}
