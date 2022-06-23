/**********************************************************************
 *
 * kwNg/BS/tz/kwBSTZMod.ts
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

import {kwBSTZ}                 from './kwBSTZ';
import {kwBSTZApi}              from './kwBSTZApi';
import {kwBSTZCtrlApi}          from './kwBSTZCtrlApi';
import {kwBSTZCtrlList}         from './kwBSTZCtrlList';
import {kwBSTZCtrlMdl}          from './kwBSTZCtrlMdl';
import {kwBSTZForm}             from './kwBSTZForm';
import {kwBSTZList}             from './kwBSTZList';
import {kwBSTZMdl}              from './kwBSTZMdl';
import {kwBSTZMsg}              from './kwBSTZMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSTZ,
		kwBSTZCtrlApi,
		kwBSTZCtrlList,
		kwBSTZCtrlMdl,
	],
	exports:
	[
		kwBSTZ,
		kwBSTZCtrlApi,
		kwBSTZCtrlList,
		kwBSTZCtrlMdl,
	],
	providers:
	[
		kwBSTZApi,
		kwBSTZList,
		kwBSTZMdl,
		kwBSTZMsg
	]
})
//@formatter:on
export class kwBSTZMod
{

	constructor()
	{
		//console.log('kwBSTZMod::constructor() called.');
	}
}
