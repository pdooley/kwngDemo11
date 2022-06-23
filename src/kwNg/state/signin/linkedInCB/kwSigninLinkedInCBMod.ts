//@formatter:off
import { NgModule }             from '@angular/core';

import {kwSigninLinkedInCB}               from './kwSigninLinkedInCB';
import {kwSigninLinkedInCBApi}            from './kwSigninLinkedInCBApi';
import {kwSigninLinkedInCBCtrlApi}        from './kwSigninLinkedInCBCtrlApi';
import {kwSigninLinkedInCBMsgFcty}        from './kwSigninLinkedInCBMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwSigninLinkedInCB,
		kwSigninLinkedInCBCtrlApi,
	],
	exports:
	[
		kwSigninLinkedInCB,
		kwSigninLinkedInCBCtrlApi,
	],
	providers:
	[
		kwSigninLinkedInCBApi,
		kwSigninLinkedInCBMsgFcty
	]
})
//@formatter:on
export class kwSigninLinkedInCBModule
{

	constructor()
	{
		//console.log('kwSigninLinkedInCBModule::constructor() called.');
	}
}
