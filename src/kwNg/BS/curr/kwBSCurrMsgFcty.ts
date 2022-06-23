/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrMsgFcty.ts
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

import {kwBSCurrApi }      from "./kwBSCurrApi";
import {kwBSSrvcsMap }     from "@kwNgBS/srvcs/kwBSSrvcsMap";
import {kwBSTokensMap }    from "@kwNgBS/tokens/kwBSTokensMap";
import {kwStMsgFcty }        from "@kwState/kwStMsgFcty";
//@formatter:off


@Injectable()
export class kwBSCurrMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSCurrApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
