/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0Mod.ts
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

import {kwAuth0}                from './kwAuth0';
import {kwAuth0Api}             from './kwAuth0Api';
import {kwAuth0Ctrl}            from './kwAuth0Ctrl';
import {kwAuth0List}            from './kwAuth0List';
import {kwAuth0Mdl}             from './kwAuth0Mdl';
import {kwAuth0Msg}             from './kwAuth0Msg';
import {kwAuth0MsgFcty}         from './kwAuth0MsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwAuth0,
		kwAuth0Ctrl,
	],
	exports:
	[
		kwAuth0,
		kwAuth0Ctrl,
	],
	providers:
	[
		kwAuth0Api,
		kwAuth0List,
		kwAuth0Mdl,
		kwAuth0Msg,
		kwAuth0MsgFcty,
	]
})
//@formatter:on
export class kwAuth0Mod
{

	constructor()
	{
		//console.log('kwAuth0Mod::constructor() called.');
	}
}
