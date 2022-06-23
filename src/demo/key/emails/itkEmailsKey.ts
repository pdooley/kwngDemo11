/**********************************************************************
 *
 * app/key/emails/itkEmailsKey.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import {Component}				from '@angular/core';

import { itkEmailsVal }        from "../../state/emails/itkEmailsVal";
import { kwNgBaseKey }          from "../../../kwNg/key/kwNgBaseKey";
// @formatter:on


const sKEY = "host";


@Component({
	selector: 'itk-emails-key',
	template: `<br>`,
})
export class itkEmailsKey extends kwNgBaseKey
{
	constructor(srvcData: itkEmailsVal)
	{
		super(sKEY, srvcData)
		//console.log("itkEmailsKey::constructor() called");
	}
}
