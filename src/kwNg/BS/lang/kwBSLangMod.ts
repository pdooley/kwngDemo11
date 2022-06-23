/**********************************************************************
 *
 * kwNg/BS/tz/kwBSLangMod.ts
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

import {kwBSLang}               from './kwBSLang';
import {kwBSLangApi}            from './kwBSLangApi';
import {kwBSLangCtrlApi}        from './kwBSLangCtrlApi';
import {kwBSLangCtrlList}       from './kwBSLangCtrlList';
import {kwBSLangCtrlMdl}        from './kwBSLangCtrlMdl';
import {kwBSLangForm}           from './kwBSLangForm';
import {kwBSLangList}           from './kwBSLangList';
import {kwBSLangMdl}            from './kwBSLangMdl';
import {kwBSLangMsg}            from './kwBSLangMsg';
import {kwBSLangMsgFcty}        from './kwBSLangMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwBSLang,
		kwBSLangCtrlApi,
		kwBSLangCtrlList,
		kwBSLangCtrlMdl,
	],
	exports:
	[
		kwBSLang,
		kwBSLangCtrlApi,
		kwBSLangCtrlList,
		kwBSLangCtrlMdl,
	],
	providers:
	[
		kwBSLangApi,
		kwBSLangForm,
		kwBSLangList,
		kwBSLangMdl,
		kwBSLangMsg,
		kwBSLangMsgFcty
	]
})
//@formatter:on
export class kwBSLangMod
{

	constructor()
	{
		//console.log('kwBSLangMod::constructor() called.');
	}
}
