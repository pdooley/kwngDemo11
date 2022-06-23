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

import { kwLogin }             from './kwLogin';
//import { kwLoginRtg }          from './kwLoginRtg';

@NgModule(
{
	imports:
	[
		CommonModule,

		kwNgCoreMod,

//		kwLoginRtg
	],
	declarations: 
	[
		kwLogin,
	],
	exports:
	[
		kwLogin,
	]
})
//@formatter:on
export class kwLoginMod {

	constructor()
	{
		//console.log('kwLoginMod::constructor() called.');
	}
}
