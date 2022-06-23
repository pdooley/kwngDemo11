/**********************************************************************
 *
 * kwNg/state/org/kwOrgMsgFcty.ts
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
import { Injectable }       from '@angular/core';

import { kwBSSrvcsMap }     from "@kwNgBS/srvcs/kwBSSrvcsMap";
import { kwBSTokensMap }    from "@kwNgBS/tokens/kwBSTokensMap";
import { kwStMsgFcty }        from "@kwState/kwStMsgFcty";

import { kwOrgApi }         from "./kwOrgApi";

//@formatter:off


@Injectable()
export class kwOrgMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwOrgApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
