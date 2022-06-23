/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsMsgFcty.ts
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

import {kwBSSrvcsMap }     from "@kwNgBS/srvcs/kwBSSrvcsMap";
import {kwBSTokensMap }    from "@kwNgBS/tokens/kwBSTokensMap";
import {kwBSLangsApi }     from "./kwBSLangsApi";
import {kwStMsgFcty }        from "@kwState/kwStMsgFcty";
//@formatter:off


@Injectable()
export class kwBSLangsMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSLangsApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
