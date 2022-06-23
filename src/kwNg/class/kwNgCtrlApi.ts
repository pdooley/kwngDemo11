/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccCtrlApi.ts
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
import { OnInit }			from '@angular/core';
import { OnDestroy }		from '@angular/core';
import { Subscription }		from 'rxjs/Subscription';

import { kwCtrlApi }        from "@kwCtrl/kwCtrlApi";

import { kwNgStApi }        from "./kwNgStApi";
import { kwNgStDataList }   from "./kwNgStDataList";
//@formatter:off


export class kwNgCtrlApi extends kwCtrlApi implements OnInit, OnDestroy
{
	private subApis: Subscription;

	constructor(
		srvcSrc: kwNgStDataList,
		srvcDst: kwNgStApi,
		sState: string          )
	{
		super(srvcSrc, srvcDst, sState);
		//console.log(this.sClass, "::constructor() called");
	}

	ngOnInit()
	{
		//console.log(this.sClass, "::ngOnInit() called");

		this.subApis = (<kwNgStDataList>this.srvcSrc).changed$.subscribe(info =>
		{
			this.load();
		});

		this.load();
	}

	ngOnDestroy()
	{
		//console.log(this.sClass, "::ngOnDestroy() called.");
		this.subApis.unsubscribe();
	}

}
