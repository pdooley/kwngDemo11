/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlMsgFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {Injectable }       from '@angular/core';

import {kwBSMdlApi }      from "./kwBSMdlApi";
import {kwBSSrvcsMap }     from "@kwNgBS/srvcs/kwBSSrvcsMap";
import {kwBSTokensMap }    from "@kwNgBS/tokens/kwBSTokensMap";
import {kwStMsgFcty }        from "@kwState/kwStMsgFcty";
//@formatter:off


@Injectable()
export class kwBSMdlMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSMdlApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
