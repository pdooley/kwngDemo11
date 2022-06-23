/**********************************************************************
 *
 * kwNg/key/id/kwIdKey.ts
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
import {Component}	from '@angular/core';

import { kwNgBaseKey }              from "@kwNgClass/kwNgBaseKey";

import { kwIdKeyVal }			    from './kwIdKeyVal';

//@formatter:on


const sKEY = "id";


@Component({
	selector: 'kw-id-key',
	template: `<br>`,
})
export class kwIdKey extends kwNgBaseKey
{
	constructor(srvcList: kwIdKeyVal)
	{
		super(sKEY, srvcList)
		//console.log("kwIdKey::constructor() called");
	}
}
