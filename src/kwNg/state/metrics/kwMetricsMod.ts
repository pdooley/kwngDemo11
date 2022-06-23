/**********************************************************************
 *
 * kwNg/state/metrics/kwMetricsMod.ts
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

import {kwMetrics}                 from './kwMetrics';
import {kwMetricsApi}              from './kwMetricsApi';
import {kwMetricsCtrlApi}          from './kwMetricsCtrlApi';
import {kwMetricsCtrlList}         from './kwMetricsCtrlList';
import {kwMetricsList}             from './kwMetricsList';
import {kwMetricsMsg}              from './kwMetricsMsg';
import {kwMetricsMsgFcty}          from './kwMetricsMsgFcty';


@NgModule(
{
	imports:
	[
	],
	declarations:
	[
		kwMetrics,
		kwMetricsCtrlApi,
		kwMetricsCtrlList,
	],
	exports:
	[
		kwMetrics,
		kwMetricsCtrlApi,
		kwMetricsCtrlList,
	],
	providers:
	[
		kwMetricsApi,
		kwMetricsList,
		kwMetricsMsg,
		kwMetricsMsgFcty,
	]
})
//@formatter:on
export class kwMetricsMod
{

	constructor()
	{
		//console.log('kwMetricsMod::constructor() called.');
	}
}
