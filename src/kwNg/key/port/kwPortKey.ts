/**********************************************************************
 *
 * kwNg/key/port/kwPortKey.ts
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

import { kwPortKeyVal }			    from './kwPortKeyVal';

//@formatter:on


const sKEY = "port";


@Component({
	selector: 'kw-port-key',
	template: `<br>`,
})
export class kwPortKey extends kwNgBaseKey
{
	constructor(srvcList: kwPortKeyVal)
	{
		super(sKEY, srvcList)
		//console.log("kwPortKey::constructor() called");
	}
}
