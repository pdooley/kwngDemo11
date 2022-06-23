/**********************************************************************
 *
 * kwNg/BS/tokens/kwBSTokensMod.ts
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

import {kwBSTokens}             from './kwBSTokens';
import {kwBSTokensCtrlMap}      from './kwBSTokensCtrlMap';
import {kwBSTokensMap}          from './kwBSTokensMap';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSTokens,
		kwBSTokensCtrlMap,
	],
	exports:
	[
		kwBSTokens,
		kwBSTokensCtrlMap,
	],
	providers:
	[
		kwBSTokensMap,
	]
})
//@formatter:on
export class kwBSTokensMod
{

	constructor()
	{
		//console.log('kwBSTokensMod::constructor() called.');
	}
}
