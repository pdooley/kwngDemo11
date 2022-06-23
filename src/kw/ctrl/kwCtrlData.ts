/**********************************************************************
 *
 * kw/ctrl/kwCtrlData.ts
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
import { kwCtrl }           from "./kwCtrl";
import { kwStData }         from "@kwState/kwStData";

export abstract class kwCtrlData extends kwCtrl
{

	public constructor(
		srvcSrc: kwStData,
		srvcDst: kwStData )
	{
		super(srvcSrc, srvcDst);

		//console.log(this.sClass, "::constructor() called");
	}

//@formatter:on

}
