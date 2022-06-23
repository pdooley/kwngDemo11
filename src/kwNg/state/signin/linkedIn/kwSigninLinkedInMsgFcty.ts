//@formatter:on
import {Injectable}         from '@angular/core';

import {kwBSSrvcsMap}       from "@kwNgBS/srvcs/kwBSSrvcsMap";
import {kwBSTokensMap}      from "@kwNgBS/tokens/kwBSTokensMap";
import {kwStMsgFcty}          from "@kwState/kwStMsgFcty";

import {kwSigninLinkedInApi}        from "./kwSigninLinkedInApi";
//@formatter:off


@Injectable()
export class kwSigninLinkedInMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwSigninLinkedInApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestNoti::constructor() called.");
	}
}
