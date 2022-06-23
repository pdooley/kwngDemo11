/**********************************************************************
 *
 * kwNg/key/kwNgBaseKey.ts
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
import { OnInit }               from '@angular/core';

import { kwBaseKey }            from "@kw/key/kwBaseKey";
import { kwStDataVal }          from "@kwState/kwStDataVal";
//@formatter:on


export class kwNgBaseKey extends kwBaseKey implements OnInit
{
	constructor(sKey: string, srvcVal: kwStDataVal)
	{
		super(sKey, srvcVal)
		//console.log("kwApiKey::constructor() called");
	}

	public ngOnInit()
	{
		//console.log("kwApiKey::ngOnInit() called");
		this.get();
	}
}
