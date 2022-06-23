/**********************************************************************
 *
 * kwNg/BS/custom/kwBSCustomCtrlMsg.ts
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
import {Component }            from "@angular/core";
import {OnInit }		        from '@angular/core';
import {OnDestroy }	        from '@angular/core';
import {Subscription }         from "rxjs/Subscription";

import {kwMsg }                from "@kwClass/msg/kwMsg";

import {kwBSCustomApi }        from "./kwBSCustomApi";
import {kwBSCustomMsg }        from "./kwBSCustomMsg";
import {kwBSCustomMsgFcty }    from "./kwBSCustomMsgFcty";

//@formatter:on


@Component({
	selector: 'kw-bootstrap-custom-ctrl-msg',
	template: `<br>`,
})
export class kwBSCustomCtrlMsg implements OnInit, OnDestroy
{
	subApi: Subscription;

	protected sClass: string = this.constructor.name;

	constructor(
		private srvcApi: kwBSCustomApi,
		private srvcMsg: kwBSCustomMsg,
		private srvcFcty: kwBSCustomMsgFcty  )
	{
		//console.log("this.sClass,"::constructor() called");
	}

	ngOnInit()
	{
		//console.log(this.sClass,"::ngOnInit() called");

		this.subApi = this.srvcApi.changed$.subscribe(info =>
		{
			this.load();
		});
	}

	ngOnDestroy()
	{
		//console.log(this.sClass,"::ngOnDestroy() called.");
		this.subApi.unsubscribe();
	}

	load(): void
	{
		//console.log(this.sClass,"::load() called");

		const msg: kwMsg = this.srvcFcty.get([]);
		if (!kwMsg.is(msg))
		{
			console.error(this.sClass,"::load() error creating msg");
			return;
		}

		this.srvcMsg.change(msg);
	}
}
