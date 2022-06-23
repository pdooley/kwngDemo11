/**********************************************************************
 *
 * kwNg/BS/user/kwBSUserCtrlList.ts
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
import {Component }             from "@angular/core";
import {OnInit }                from '@angular/core';
import {OnDestroy }			    from '@angular/core';
import {Subscription }			from 'rxjs/Subscription';

import {kw}                     from "@kw/kw";
import {kwSigninList}           from "@kwNgState/signin/kwSigninList";

import {kwBSUserList }          from "./kwBSUserList";

//@formatter:on


const sUSER: string = "user";


@Component({
	selector: 'kw-bootstrap-user-ctrl-list',
	template: `<br>`,
})
export class kwBSUserCtrlList implements OnInit, OnDestroy
{
	subSrc: Subscription;

	constructor(
		private srvcSrc: kwSigninList,
	    private srvcStore: kwBSUserList, )
	{
		//console.log("kwBSUserCtrlList::constructor() called");
	}

	ngOnInit()
	{
		//console.log("kwBSUserCtrlList::ngOnInit() called");

		this.subSrc = this.srvcSrc.changed$.subscribe(info =>
		{
			//console.log("kwBSUserCtrlList::ngOnInit::changed called");
			this.load();
			const dd = this.srvcStore.get();
			//console.info("kwBSUserCtrlList::ngOnInit() dd is [", dd, "]");
		});

		this.load();

		const dd = this.srvcStore.getFirst();
		//console.info("kwBSUserCtrlList::ngOnInit() dd is [", dd, "]");
	}

	ngOnDestroy()
	{
		//console.log("kwBSUserCtrlList::ngOnDestroy() called.");
		this.subSrc.unsubscribe();
	}

	protected load(): boolean
	{
		//console.log("kwBSUserCtrlList::load() called");

		const data: Object = this.srvcSrc.getFirst();
		if (kw.isNull(data))
		{
			//console.info("kwBSUserCtrlList::load() not yet set.");
			return false;
		}
		//console.info("kwBSUserCtrlList::load() data is [", data, "]");

		const user: Object = data[sUSER];
		if (kw.isNull(user))
		{
			console.error("kwBSUserCtrlList::load() error retrieving user.");
			return false;
		}
		//console.info("kwBSUserCtrlList::load() user is [", user, "]");

		this.srvcStore.change([user]);

		return true;
	}
}
