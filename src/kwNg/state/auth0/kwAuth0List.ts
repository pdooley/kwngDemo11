/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0List.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }	            from '@angular/core';

import { kwNgStDataList }              from "@kwNgClass/kwNgStDataList";
import { kwBSTraceVal }             from "@kwNgBS/trace/kwBSTraceVal";
import { kw }                       from "@kw/kw";


const sTAG_TYPE: string = "auth0";


@Injectable()
export class kwAuth0List extends kwNgStDataList
//@formatter:on
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace, sTAG_TYPE);

		//console.log(this.sTag,"::constructor() called.");
	}

	login(options, onSuccess, onFail)
	{
		//console.log("srvcStateAuth0::login() called.");

		if (kw.isNull(options))
		{
			console.error("srvcStateAuth0::login() options is invalid.");
			return;
		}
		//console.debug("srvcStateAuth0::login() options is ", options);

/*		angularAuth0.signin(
			options,
			onSuccess,
			onFail
		);
*/	}

	logout()
	{
		//console.log("srvcStateAuth0::logout() called.");
	}


}
