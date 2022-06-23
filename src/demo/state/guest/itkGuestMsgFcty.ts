/**********************************************************************
 *
 * app/state/guest/itkGuestMsgFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:on
import { kwMsgFcty }        from "../../../kw/state/kwMsgFcty";

import { itkGuestApi }      from "./itkGuestApi";
import { kwBSSrvcsMap }     from "../../../kwNg/BS/srvcs/kwBSSrvcsMap";
import { kwBSTokensMap }    from "../../../kwNg/BS/tokens/kwBSTokensMap";
// @formatter:off


export class itkGuestMsgFcty extends kwMsgFcty
{
	constructor(
		srvcApi: itkGuestApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
