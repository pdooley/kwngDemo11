/**********************************************************************
 *
 * kwNg/BS/cred/kwBSStatusCtrlVal.ts
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
import {Component }         from "@angular/core";
import {OnInit }            from '@angular/core';
import {OnDestroy }         from '@angular/core';
import {Subscription }      from 'rxjs/Subscription';

import {kw}                 from "@kw/kw";
import {kwBSCurrsMap }      from "@kwNgBS/currs/kwBSCurrsMap";
import {kwBSLangsMap }      from "@kwNgBS/langs/kwBSLangsMap";
import {kwBSSrvcsMap }      from "@kwNgBS/srvcs/kwBSSrvcsMap";
import {kwBSStat}           from "@kwClass/BSStat/kwBSStat";
import {kwBSStatComplete}   from "@kwClass/BSStat/kwBSStatComplete";
import {kwBSStatBase}       from "@kwClass/BSStat/kwBSStatBase";
import {kwBSTokensMap }     from "@kwNgBS/tokens/kwBSTokensMap";
import {kwBSTZsMap }        from "@kwNgBS/TZs/kwBSTZsMap";

import {kwBSStatusVal }     from "./kwBSStatusVal";

//@formatter:on


@Component({
	selector: 'kw-bootstrap-status-ctrl-val',
	template: `<br>`,
})
export class kwBSStatusCtrlVal implements OnInit, OnDestroy
{
	subCurrs: Subscription;
	subLangs: Subscription;
	subSrvcs: Subscription;
	subTokens: Subscription;
	subTZs: Subscription;

	constructor(
		private srvcCurrs: kwBSCurrsMap,
		private srvcLangs: kwBSLangsMap,
		private srvcSrvcs: kwBSSrvcsMap,
		private srvcTokens: kwBSTokensMap,
		private srvcTZs: kwBSTZsMap,
		private srvcStore:  kwBSStatusVal    )
	{
		//console.log("kwBSStatusCtrlVal::constructor() called");
	}

	ngOnInit()
	{
		//console.log("kwStatusBSCtrlApi::ngOnInit() called");

		this.subCurrs = this.srvcCurrs.changed$.subscribe(info =>
		{
			this.loadComplete();
		});

		this.subLangs = this.srvcLangs.changed$.subscribe(info =>
		{
			this.loadComplete();
		});

		this.subSrvcs = this.srvcSrvcs.changed$.subscribe(info =>
		{
			this.loadBase();
		});

		this.subTokens = this.srvcTokens.changed$.subscribe(info =>
		{
			this.loadBase();
		});

		this.subTZs = this.srvcTZs.changed$.subscribe(info =>
		{
			this.loadComplete();
		});

		this.loadBase();
	}

	ngOnDestroy()
	{
		//console.log("kwStatusBSCtrlApi::ngOnDestroy() called.");
		this.subCurrs.unsubscribe();
		this.subLangs.unsubscribe();
		this.subSrvcs.unsubscribe();
		this.subTokens.unsubscribe();
		this.subTZs.unsubscribe();
	}

	protected loadBase()
	{
		//console.log("kwBSStatusCtrlVal::loadBase() called");

		const srvcs: Object = this.srvcSrvcs.get();
		if (kw.isNull(srvcs))
		{
			//console.info("kwBSStatusCtrlVal::loadBase() [srvcs] are not set - remaining in BS init phase.");
			return;
		}
		//console.info("kwBSStatusCtrlVal::loadBase() srvcs is [", srvcs, "]");

		const tokens: Object = this.srvcTokens.get();
		if (kw.isNull(tokens))
		{
			//console.info("kwBSStatusCtrlVal::loadBase() [tokens] are not set - remaining in BS init phase.");
			return;
		}
		//console.info("kwBSStatusCtrlVal::loadBase() tokens is [", tokens, "]");

		//console.info("kwBSStatusCtrlVal::loadBase() [srvc,tokens] loaded - moving to BS Base phase.");

		this.subSrvcs.unsubscribe();
		this.subTokens.unsubscribe();

		const status: kwBSStat = new kwBSStatBase();
		if (!kwBSStat.is(status))
		{
			console.error("kwBSStatusCtrlVal::loadBase() error creating status.");
			return;
		}

		if (!status.init())
		{
			console.error("kwBSStatusCtrlVal::loadBase() error initializing status.");
			return;
		}

		this.srvcStore.change(status);

		return true;
	}

	protected loadComplete()
	{
		//console.log("kwBSStatusCtrlVal::loadComplete() called");

		const currs: Object = this.srvcCurrs.get();
		if (kw.isNull(currs))
		{
			//console.info("kwBSStatusCtrlVal::loadComplete() [currs] are not set - remaining in BS base phase.");
			return;
		}
		//console.info("kwBSStatusCtrlVal::loadComplete() currs is [", currs, "]");

		const langs: Object = this.srvcLangs.get();
		if (kw.isNull(langs))
		{
			//console.info("kwBSStatusCtrlVal::loadComplete() [langs] are not set - remaining in BS base phase.");
			return;
		}
		//console.info("kwBSStatusCtrlVal::loadComplete() langs is [", langs, "]");

		const tZs: Object = this.srvcTZs.get();
		if (kw.isNull(tZs))
		{
			//console.info("kwBSStatusCtrlVal::loadComplete() [tZs] are not set  - remaining in BS base phase.");
			return;
		}
		//console.info("kwBSStatusCtrlVal::loadComplete() tZs is [", tZs, "]");

		//console.info("kwBSStatusCtrlVal::loadComplete() [currs,langs,TZs] loaded - moving to BS complete phase.");

		this.subCurrs.unsubscribe();
		this.subLangs.unsubscribe();
		this.subTZs.unsubscribe();

		const status: kwBSStat = new kwBSStatComplete();
		if (!kwBSStat.is(status))
		{
			console.error("kwBSStatusCtrlVal::loadComplete() error creating status.");
			return;
		}

		if (!status.init())
		{
			console.error("kwBSStatusCtrlVal::loadComplete() error initializing status.");
			return;
		}

		this.srvcStore.change(status);

		return true;
	}
}
