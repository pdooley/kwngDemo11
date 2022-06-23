/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsCtrlMsg.ts
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
import {OnDestroy }	            from '@angular/core';
import {Subscription }         from "rxjs/Subscription";

import {kwBSLangsMsg }         from "./kwBSLangsMsg";
import {kwBSLangsMsgFcty }     from "./kwBSLangsMsgFcty";
import {kwMsg }                from "@kwClass/msg/kwMsg";
import {kwBSStatusVal }        from "@kwNgBS/status/kwBSStatusVal";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-langs-ctrl-msg',
	template: `<br>`,
})
export class kwBSLangsCtrlMsg implements OnInit, OnDestroy
{
	subStatus: Subscription;

	protected sClass: string = this.constructor.name;

	constructor(
		private srvcStatus: kwBSStatusVal,
		private srvcMsg: kwBSLangsMsg,
		private srvcFcty: kwBSLangsMsgFcty  )
	{
		//console.log(this.sClass,"::constructor() called");
	}

	ngOnInit()
	{
		//console.log(this.sClass,"::ngOnInit() called");

		this.subStatus = this.srvcStatus.changed$.subscribe(info =>
		{
			//console.log(this.sClass,"::ngOnInit::subStatus::changed() called");

			this.load();
		});

		this.load();
	}

	ngOnDestroy()
	{
		//console.log(this.sClass,"::ngOnDestroy() called.");
		this.subStatus.unsubscribe();
	}

	load(): void
	{
		//console.log(this.sClass,"::load() called");

		if (!this.srvcStatus.isBase())
		{
			//console.log(this.sClass,"::load() base not complete - doing nothing");
			return;
		}

		const msg: kwMsg = this.srvcFcty.get([]);
		if (!kwMsg.is(msg))
		{
			console.error(this.sClass,"::load() error creating msg");
			return;
		}

		this.srvcMsg.change(msg);
	}
}
