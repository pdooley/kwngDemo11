/**********************************************************************
 *
 * kwNg/key/api/kwApiKey.ts
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
import { Component }from '@angular/core';

import { kwNgBaseKey }              from "@kwNgClass/kwNgBaseKey";

import { kwApiKeyVal }              from "./kwApiKeyVal";

//@formatter:on


const sKEY = "api";


@Component({
	selector: 'kw-api-key',
	template: `<br>`,
})
export class kwApiKey extends kwNgBaseKey
{
	constructor(srvcVal: kwApiKeyVal)
	{
		super(sKEY, srvcVal)
		//console.log("kwApiKey::constructor() called");
	}
}
