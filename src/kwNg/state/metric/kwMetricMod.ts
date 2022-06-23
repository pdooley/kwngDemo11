/**********************************************************************
 *
 * kwNg/state/metric/kwMetricMod.ts
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

import {kwMetric}                 from './kwMetric';
import {kwMetricApi}              from './kwMetricApi';
import {kwMetricCtrlApi}          from './kwMetricCtrlApi';
import {kwMetricCtrlList}         from './kwMetricCtrlList';
import {kwMetricCtrlMdl}          from './kwMetricCtrlMdl';
import {kwMetricForm}             from './kwMetricForm';
import {kwMetricList}             from './kwMetricList';
import {kwMetricMdl}              from './kwMetricMdl';
import {kwMetricMsg}              from './kwMetricMsg';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwMetric,
		kwMetricCtrlApi,
		kwMetricCtrlList,
		kwMetricCtrlMdl,
	],
	exports:
	[
		kwMetric,
		kwMetricCtrlApi,
		kwMetricCtrlList,
		kwMetricCtrlMdl,
	],
	providers:
	[
		kwMetricApi,
		kwMetricForm,
		kwMetricList,
		kwMetricMdl,
		kwMetricMsg,
	]
})
//@formatter:on
export class kwMetricMod
{

	constructor()
	{
		//console.log('kwMetricMod::constructor() called.');
	}
}
