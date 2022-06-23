/**********************************************************************
 *
 * kwNg/state/lang/kwBSLangMsgFcty.ts
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
import {kwStMsgFcty }        from "@kwState/kwStMsgFcty";

import {kwBSLangApi }      from "./kwBSLangApi";

//@formatter:off


@Injectable()
export class kwBSLangMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSLangApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("this.sClass, "::constructor() called.");
	}
}
