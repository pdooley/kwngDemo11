/**********************************************************************
 *
 * kw/msg/kwMsgType.ts
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

import {kwApi }            from "@kwClass/api/kwApi";
import {kwSrvcMap }        from "@kwClass/srvc/kwSrvcMap";
import {kwTokenMap }       from "@kwClass/token/kwTokenMap";
//@formatter:on


export class kwMsgType
{
	api: kwApi;
	data: object;
	params: object;
	srvcs: kwSrvcMap;
	tokens: kwTokenMap;
}

