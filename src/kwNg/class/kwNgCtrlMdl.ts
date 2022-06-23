/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccState.ts
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
import { OnInit }           from '@angular/core';
import { OnDestroy }	    from '@angular/core';
import { Subscription }	    from 'rxjs/Subscription';

import { kwCtrlMdl }        from "@kwCtrl/kwCtrlMdl";
import { kwStDataMap }      from "@kwState/kwStDataMap";
import { kwStMdl }          from "@kwState/kwStMdl";

import { kwMdlsList }       from "@kwNgState/mdls/kwMdlsList";
import { kwNgStDataList }   from "./kwNgStDataList";

//@formatter:off


export class kwNgCtrlMdl extends kwCtrlMdl implements OnInit, OnDestroy
{
	private sub: Subscription;

	constructor(
		srvcMdl: kwStMdl,
		srvcMdls: kwMdlsList,
		sState: string,
		currs: kwStDataMap,
		langs: kwStDataMap,
		tZs: kwStDataMap    )
	{
		super(srvcMdl, srvcMdls, sState, currs, langs, tZs);
		//console.log(this.sClass, "::constructor() called");
	}

	ngOnInit()
	{
		//console.log(this.sClass, "::ngOnInit() called");

		if (!super.init())
		{
			console.error(this.sClass, "::ngOnInit() error initializing");
			return;
		}

		this.sub = (<kwNgStDataList>this.srvcMdls).changed$.subscribe(info =>
		{
			this.load();
		});
	}

	ngOnDestroy()
	{
		//console.log(this.sClass, "::ngOnDestroy() called.");
		this.sub.unsubscribe();
	}

}
