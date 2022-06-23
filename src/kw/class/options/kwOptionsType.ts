/**********************************************************************
 *
 * kw/options/kwOptionsType.ts
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
import {kwAct }                from "@kwClass/act/kwAct";
import {kwAjax }               from "@kwClass/ajax/kwAjax";
import {kwMode }               from "@kwClass/mode/kwMode";
import {kwParam }              from "@kwClass/param/kwParam";
import {kwSrvcMap }            from "@kwClass/srvc/kwSrvcMap";
import {kwTokenMap }           from "@kwClass/token/kwTokenMap";
//@formatter:on


export class kwOptionsType
{
	act: kwAct;
	ajax: kwAjax;
	data: object;
	mode: kwMode;
	params: kwParam[];
	srvcs: kwSrvcMap;
	tokens: kwTokenMap;
}
