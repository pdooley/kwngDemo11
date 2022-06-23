/**********************************************************************
 *
 * app/state/resp/itkRespMsgFcty.ts
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
import { itkRespApi }       from "./itkRespApi";
import { kwBSSrvcsMap }     from "../../../kwNg/BS/srvcs/kwBSSrvcsMap";
import { kwBSTokensMap }    from "../../../kwNg/BS/tokens/kwBSTokensMap";
import { kwMsgFcty }        from "../../../kw/state/kwMsgFcty";
// @formatter:off


export class itkRespMsgFcty extends kwMsgFcty
{
	constructor(
		srvcApi: itkRespApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
