/**********************************************************************
 *
 * kwNg/ctrl/mdls/kwMdlsCtrlMsg.ts
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

import { kwMdlsMsg }            from "./kwMdlsMsg";
import { kwMdlsMsgFcty }        from "./kwMdlsMsgFcty";

//@formatter:on


@Component({
	selector: 'kw-mdls-ctrl-msg',
	template: `<br>`,
})
export class kwMdlsCtrlMsg implements OnInit, OnDestroy
{
	subApp: Subscription;

	protected sTag: string = this.constructor.name;

	constructor(
		private srvcApp: kwAppVal,
		private srvcMsg: kwMdlsMsg,
		private srvcFcty: kwMdlsMsgFcty  )
	{
		//console.log(this.sTag,"::constructor() called");
	}

	ngOnInit()
	{
		//console.log("kwMdlsCtrlMsg::ngOnInit() called");

		this.subApp = this.srvcApp.changed$.subscribe(info =>
		{
			this.inspectApp(info);
		});
	}

	ngOnDestroy()
	{
		//console.log(this.sTag,"::ngOnDestroy() called.");
		this.subApp.unsubscribe();
	}

	inspectApp(info): void
	{
		//console.log(this.sTag,"::inspectApp() called");

		if (!kwApp.is(info))
		{
			console.error(this.sTag,"::inspectApp() info is invalid");
			return;
		}

		if (!info.isInit())
		{
			//console.info(this.sTag,"::inspectApp() app state is not init - doing nothing");
			return;
		}

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
