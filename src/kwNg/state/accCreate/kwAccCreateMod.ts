/**********************************************************************
 *
 * kwNg/state/accCreate/kwAccCreateMod.ts
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

import {kwAccCreate}            from './kwAccCreate';
import {kwAccCreateApi}         from './kwAccCreateApi';
import {kwAccCreateCtrlApi}     from './kwAccCreateCtrlApi';
import {kwAccCreateCtrlList}    from './kwAccCreateCtrlList';
import {kwAccCreateCtrlMdl}     from './kwAccCreateCtrlMdl';
import {kwAccCreateForm}        from './kwAccCreateForm';
import {kwAccCreateList}        from './kwAccCreateList';
import {kwAccCreateMdl}         from './kwAccCreateMdl';
import {kwAccCreateMsg}         from './kwAccCreateMsg';
import {kwAccCreateMsgFcty}     from './kwAccCreateMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwAccCreate,
		kwAccCreateCtrlApi,
		kwAccCreateCtrlList,
		kwAccCreateCtrlMdl,
	],
	exports:
	[
		kwAccCreate,
		kwAccCreateCtrlApi,
		kwAccCreateCtrlList,
		kwAccCreateCtrlMdl,
	],
	providers:
	[
		kwAccCreateApi,
		kwAccCreateForm,
		kwAccCreateList,
		kwAccCreateMdl,
		kwAccCreateMsg,
        kwAccCreateMsgFcty,
	]
})
//@formatter:on
export class kwAccCreateMod
{

	constructor()
	{
		//console.log('kwAccCreateMod::constructor() called.');
	}
}
