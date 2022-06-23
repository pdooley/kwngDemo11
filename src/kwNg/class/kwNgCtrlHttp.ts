/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlDataList.ts
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

import { kwCtrlHttp }   	from "@kwCtrl/kwCtrlHttp";
import { kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";

import { kwNgStMsg }        from "./kwNgStMsg";
import { kwNgStDataList }   from "./kwNgStDataList";



export class kwNgCtrlHttp 	extends kwCtrlHttp
							implements OnInit, OnDestroy
{
	private subMsg: Subscription;

	constructor(
		srvcMsg: kwNgStMsg,
		srvcList: kwNgStDataList,
		srvcHttp: kwHttpMsg  )
	{
		super(srvcMsg, srvcList, srvcHttp);
		//console.log(this.sClass, "::constructor() called");
	}

//@formatter:on

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

	}

	ngOnDestroy()
	{
		//console.log(this.sClass, "::ngOnDestroy() called.");
		this.subMsg.unsubscribe();
	}
}
