/**********************************************************************
 *
 * kwNg/state/metric/kwMetricMsgFcty.ts
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

import { kwMetricApi }      from "./kwMetricApi";

//@formatter:off


@Injectable()
export class kwMetricMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwMetricApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
