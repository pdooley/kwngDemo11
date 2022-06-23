/**********************************************************************
 *
 * kw/class/mode/kwModeDebug.ts
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
import {kwMode }			    from "./kwMode";
import {kwModeEnum }			from "./kwModeEnum";
//@formatter:on


export class kwModeDebug extends kwMode
{
	constructor()
	{
		super(kwModeEnum.debug);
	}

}

