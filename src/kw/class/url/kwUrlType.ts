/**********************************************************************
 *
 * kw/class/url/kwUrlType.ts
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
import {kwAjax }       from "@kwClass/ajax/kwAjax";
import {kwParam }      from "@kwClass/param/kwParam";
import {kwSrvcMap }    from "@kwClass/srvc/kwSrvcMap";
//@formatter:on


export class kwUrlType
{
	ajax: kwAjax;
	params: kwParam[];
	srvcs: kwSrvcMap;
}
