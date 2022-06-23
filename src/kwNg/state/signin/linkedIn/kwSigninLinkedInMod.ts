//@formatter:off
import { NgModule }             from '@angular/core';

import {kwSigninLinkedIn}               from './kwSigninLinkedIn';
import {kwSigninLinkedInApi}            from './kwSigninLinkedInApi';
import {kwSigninLinkedInCtrlApi}        from './kwSigninLinkedInCtrlApi';
import {kwSigninLinkedInMsgFcty}        from './kwSigninLinkedInMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwSigninLinkedIn,
		kwSigninLinkedInCtrlApi,
	],
	exports:
	[
		kwSigninLinkedIn,
		kwSigninLinkedInCtrlApi,
	],
	providers:
	[
		kwSigninLinkedInApi,
		kwSigninLinkedInMsgFcty
	]
})
//@formatter:on
export class kwSigninLinkedInModule
{

	constructor()
	{
		//console.log('kwSigninLinkedInModule::constructor() called.');
	}
}
