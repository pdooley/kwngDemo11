/**********************************************************************
 *
 * kwNg/key/host/kwHostKey.ts
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

import { kwHostKeyVal }			    from './kwHostKeyVal';

//@formatter:on


const sKEY = "host";


@Component({
	selector: 'kw-host-key',
	template: `<br>`,
})
export class kwHostKey extends kwNgBaseKey
{
	constructor(srvcList: kwHostKeyVal)
	{
		super(sKEY, srvcList)
		//console.log("kwHostKey::constructor() called");
	}
}
