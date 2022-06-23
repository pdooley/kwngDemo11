/**********************************************************************
 *
 * kwNg/ctrl/views/kwViewsCtrlMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 kWunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { Component }            from "@angular/core";
import { OnInit }		        from '@angular/core';
import { OnDestroy }	        from '@angular/core';
import { Subscription }         from "rxjs/Subscription";

import { kwApp }                from "@kwClass/app/kwApp";
import { kwAppVal }             from "@kwNgState/app/kwAppVal";
import { kwMsg }                from "@kwClass/msg/kwMsg";

import { kwViewsMsg }           from "./kwViewsMsg";
import { kwViewsMsgFcty }       from "./kwViewsMsgFcty";

//@formatter:on


@Component({
	selector: 'kw-views-ctrl-msg',
	template: `<br>`,
})
export class kwViewsCtrlMsg implements OnInit, OnDestroy
{
	subApp: Subscription;

	protected sTag: string = this.constructor.name;

	constructor(
		private srvcApp: kwAppVal,
		private srvcMsg: kwViewsMsg,
		private srvcFcty: kwViewsMsgFcty  )
	{
		//console.log(this.sTag,"::constructor() called");
	}

	ngOnInit()
	{
		//console.log("kwViewsCtrlMsg::ngOnInit() called");

		this.subApp = this.srvcApp.changed$.subscribe(info =>
		{
			this.inspectApp();
		});

	    this.inspectApp();
	}

	ngOnDestroy()
	{
		//console.log(this.sTag,"::ngOnDestroy() called.");
		this.subApp.unsubscribe();
	}

	inspectApp(): void
	{
		//console.log(this.sTag,"::inspectApp() called");

        const stat: kwApp = this.srvcApp.get();
		if (!kwApp.is(stat))
		{
			console.error(this.sTag,"::inspectApp() stat is invalid");
			return;
		}

		if (!stat.isInit())
		{
			//console.info(this.sTag,"::inspectApp() stat state is not init - doing nothing");
			return;
		}

		//console.info(this.sTag,"::inspectApp() app stat is init - loading views!");

		this.load();
	}

	load(): void
	{
		//console.log(this.sTag,"::load() called");

		const msg: kwMsg = this.srvcFcty.get([]);
		if (!kwMsg.is(msg))
		{
			console.error(this.sTag,"::load() error creating msg");
			return;
		}

		this.srvcMsg.change(msg);
	}
}
