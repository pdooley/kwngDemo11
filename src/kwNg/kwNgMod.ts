/**********************************************************************
 *
 * kwNg/kwNg.module.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off

import { NgModule }			    from '@angular/core';
import {ModuleWithProviders}    from '@angular/core';

import { APP_INITIALIZER }	    from '@angular/core';

import { kwBSMod }              from './BS/kwBSMod'
import { kwPageMod }            from './page/kwPageMod'
import { kwStateMod }           from './state/kwStateMod'
import { kwStateModG }          from './state/kwStateModG'

import { initConfig }           from "./kwNgInit";
import { kwNgInit }             from "./kwNgInit";
import { kwNg}                  from "./kwNg";
import { kwHttpMsg }            from "./http/kwHttpMsg";


@NgModule(
{
	imports:
	[
		kwBSMod,
		kwPageMod,
		kwStateMod,
		kwStateModG
	],
	declarations:
	[
		kwNg,

	],
	providers:
	[
	    kwHttpMsg,
		kwNgInit,
		{
			provide: APP_INITIALIZER,
			useFactory: initConfig,
			multi: true,
			deps:[kwNgInit]
		},
	],
	exports:
	[
		kwNg,

		kwBSMod,
		kwPageMod,
		kwStateMod,
		kwStateModG
	]
})
//@formatter:on
export class kwNgMod
{

}
