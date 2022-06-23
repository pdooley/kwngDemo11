/**********************************************************************
 *
 * kwNg/ctrl/kwNgStDataMap.ts
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
import { OnInit }		    from '@angular/core';
import { OnDestroy }	    from '@angular/core';
import { Subscription }	    from 'rxjs/Subscription';

import { kwCtrlDataMap }    from "@kwCtrl/kwCtrlDataMap";
import { kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";

import { kwNgStMsg }        from "./kwNgStMsg";
import { kwNgStDataMap }    from "./kwNgStDataMap";

//@formatter:on


export class kwNgCtrlDataMap extends kwCtrlDataMap implements OnInit, OnDestroy
{
	private subMsg: Subscription;

	constructor(
		srvcMsg: kwNgStMsg,
		srvcMap: kwNgStDataMap,
		srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcMap, srvcHttp);
		//console.log(this.sClass, "::constructor() called");
	}

	ngOnInit()
	{
		//console.log(this.sClass, "::ngOnInit() called");

		const msg = <kwNgStMsg>this.retrieveMsg();
		if (!kwNgStMsg.is(msg))
		{
			console.error(this.sClass, "::ngOnInit() error retrieving msg.");
			return;
		}

		this.subMsg = msg.changed$.subscribe(msg =>
		{
			this.execute(msg);
		});

		this.init();
	}

	ngOnDestroy()
	{
		//console.log(this.sClass, "::ngOnDestroy() called.");
		this.subMsg.unsubscribe();
	}
}
