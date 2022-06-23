/**********************************************************************
 *
 * kwNg/key/api/kwApiKey.ts
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
import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';
import { Subscription }     from "rxjs/Subscription";

import {fadeInAnim}         from "@kwNgView/fadeIn/kwFadeIn";

import {kw}                 from "@kw/kw";
import {kwBSAutoLoginVal}   from "@kwNgBS/autoLogin/kwBSAutoLoginVal";
import {kwBSCredVal}        from "@kwNgBS/cred/kwBSCredVal";
import {kwCred}             from "@kwClass/cred/kwCred";
import {kwSigninMsgFcty}    from "@kwNgState/signin/kwSigninMsgFcty";
import {kwSigninMsg}        from "@kwNgState/signin/kwSigninMsg";
import {kwMsg}              from "@kwClass/msg/kwMsg";

//@formatter:on



@Component({
	selector: 'kw-login',
	templateUrl: './kwLogin.html',
	styleUrls: ['./kwLogin.scss'],
	host: {
		'[@fadeInAnim]': 'true'
	},
	animations: [ fadeInAnim ]
})
export class kwLogin implements OnInit
{
	subAuto: Subscription;
	subCred: Subscription;

	sPassword: string;
	sUsername: string;

	constructor(
	    private srvcAuto: kwBSAutoLoginVal,
		private srvcCred: kwBSCredVal,
		private srvcMsg: kwSigninMsg,
		private srvcFcty: kwSigninMsgFcty    )
	{
		//console.log('kwLogin::constructor() called.');

	}

	ngOnInit()
	{
		//console.log('kwLogin::ngOnInit() called.');

		this.subAuto = this.srvcAuto.changed$.subscribe(info =>
		{
			this.inspect();
		});

		this.subCred = this.srvcCred.changed$.subscribe(info =>
		{
			this.inspect();
		});

		this.inspect();
	}

	onLogin()
	{
		//console.log('kwLogin::onLogin() called.');

		if (!kw.isString(this.sPassword))
		{
			console.error("kwLogin::onLogin() sPassword is invalid.")
			return;
		}
		//console.info("kwLogin::onLogin() sPassword is [", this.sPassword, "]");

		if (!kw.isString(this.sUsername))
		{
			console.error("kwLogin::onLogin() sUsername is invalid.")
			return;
		}
		//console.info("kwLogin::onLogin() sUsername is [", this.sUsername, "]");

		const data = {
			"email": this.sUsername,
			"password": this.sPassword
		}

		const msg: kwMsg = this.srvcFcty.add(data, []);
		if (!kwMsg.is(msg))
		{
			console.error("kwLogin::onLogin() error creating msg");
			return;
		}

		this.srvcMsg.change(msg);
	}

	inspect()
	{
		//console.log('kwLogin::retrieveCred() called.');

		const cred: kwCred = this.srvcCred.get();
		if (!kwCred.is(cred))
		{
			//console.info("kwLogin::retrieveCred() cred is not yet set.")
			return;
		}
		//console.info("kwLogin::retrieveCred() cred is ", cred)
		//console.info("kwLogin::retrieveCred() [cred] is set.")

		const bAuto: boolean = this.srvcAuto.get();
		if (!kw.isBoolean(bAuto))
		{
			//console.info("kwLogin::retrieveAuto() bAuto is not yet set.")
			return;
		}
		//console.info("kwLogin::retrieveCred() bAuto is ", bAuto)
		//console.info("kwLogin::retrieveCred() [cred, bAuto] are set.")

		const sPassword = cred.getPassword();
		if (!kw.isString(sPassword))
		{
			console.error("kwLogin::retrieveCred() sPassword is invalid.")
			return;
		}
		//console.info("kwLogin::retrieveCred() sPassword is [", sPassword, "]");
		this.sPassword = sPassword;

		const sUsername = cred.getUserName();
		if (!kw.isString(sUsername))
		{
			console.error("kwLogin::retrieveCred() sUsername is invalid.")
			return;
		}
		//console.info("kwLogin::retrieveCred() sUsername is [", sUsername, "]");
		this.sUsername = sUsername;

		if (bAuto)
		{
		    //console.info("kwLogin::retrieveCred() logging in automatically.")
	        this.onLogin();
		}

	}

}
