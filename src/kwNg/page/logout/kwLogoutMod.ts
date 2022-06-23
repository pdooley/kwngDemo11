/**********************************************************************
 *
 * kwNg/key/api/kwApiKey.ts
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
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { kwNgCoreMod }          from '@kwNgCore/kwNgCoreMod';

import { kwLogout }             from './kwLogout';
import { kwLogoutRtg }          from './kwLogoutRtg';

@NgModule(
{
	imports:
	[
		CommonModule,

		kwNgCoreMod,

		kwLogoutRtg
	],
	declarations: 
	[
		kwLogout,
	],
	exports:
	[
		kwLogout,
	]
})
//@formatter:on
export class kwLogoutMod {

	constructor()
	{
		//console.log('kwLogoutMod::constructor() called.');
	}
}
