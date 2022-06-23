//@formatter:on
import {Injectable}         from '@angular/core';

import {kwBSSrvcsMap}       from "@kwNgBS/srvcs/kwBSSrvcsMap";
import {kwBSTokensMap}      from "@kwNgBS/tokens/kwBSTokensMap";
import {kwStMsgFcty}          from "@kwState/kwStMsgFcty";

import {kwSigninLinkedInCBApi}        from "./kwSigninLinkedInCBApi";
//@formatter:off


@Injectable()
export class kwSigninLinkedInCBMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwSigninLinkedInCBApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestNoti::constructor() called.");
	}
}
