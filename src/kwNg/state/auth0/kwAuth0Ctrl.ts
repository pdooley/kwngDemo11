/**********************************************************************
 *
 * kwNg/ctrl/auth0/kwAuth0Ctrl.ts
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
import { Component }            from "@angular/core";
import { OnInit }               from '@angular/core';
import { OnDestroy }			from '@angular/core';
import { Subscription }			from 'rxjs/Subscription';

import { kw }                   from "@kw/kw";
import { kwApi }                from "@kwClass/api/kwApi";
import { kwApisApi }            from "@kwNgState/apis/kwApisApi";
import { kwApisList }           from "@kwNgState/apis/kwApisList";
import { kwAppVal }             from "@kwNgState/app/kwAppVal";
import { kwBSCustomList }       from "@kwNgBS/custom/kwBSCustomList";
import { kwCred }               from "@kwClass/cred/kwCred";
import { kwIsRootVal }          from "@kwNgState/isRoot/kwIsRootVal";
import { kwLoginErrVal }        from "@kwNgState/loginErr/kwLoginErrVal";
import { kwLoginVal }           from "@kwNgState/login/kwLoginVal";
import { kwMdlsList }           from "@kwNgState/mdls/kwMdlsList";
import { kwNgStDataVal }        from "@kwNgClass/kwNgStDataVal";

import { kwAuth0List }          from "./kwAuth0List";

const sMODEL: string = "Auth0User";
const sSTATE: string = "auth0";


//@formatter:on


@Component({
	selector: 'kw-auth0-ctrl',
	template: `<br>`,
})
export class kwAuth0Ctrl implements OnInit, OnDestroy
{
	subApis: Subscription;
	subApp: Subscription;
	subMdls: Subscription;

	constructor(private srvcApis: kwApisList,
	            private srvcApp: kwAppVal,
	            private srvcMdls: kwMdlsList,
	            private srvcIsRoot: kwIsRootVal,
	            private srvcAuth0: kwAuth0List,
	            private srvcLogin: kwLoginVal,
	            private srvcBS: kwBSCustomList,
	            private srvcLoginErr: kwLoginErrVal,
	            private srvcApisApi: kwApisApi  )
	{
		//console.log("kwAuth0Ctrl::constructor() called");
	}

	ngOnInit(): boolean
	{
		//console.log("kwAuth0Ctrl::ngOnInit() called");

		this.subApis = this.srvcApis.changed$.subscribe(info =>
		{
			this.retrieveApis();
		});

		this.subApp = this.srvcApp.changed$.subscribe(info =>
		{
			this.inspectApp();
		});

		this.subMdls = this.srvcMdls.changed$.subscribe(info =>
		{
			this.retrieveMdls();
		});

		return true;
	}

	ngOnDestroy()
	{
		//console.log("kwAuth0Ctrl::ngOnDestroy() called.");

		this.subApis.unsubscribe();
		this.subApp.unsubscribe();
		this.subMdls.unsubscribe();
	}

	protected load(srvcSrc: kwNgStDataVal): boolean
	{
		//console.log("kwAuth0Ctrl::load() called");
		return true;
	}

	inspectApp()
	{
		//console.log("kwAuth0Ctrl::inspectApi() called");

		if ( this.srvcIsRoot.isRoot())
		{
			//console.info("kwAuth0Ctrl::inspectApp() user is root - doing nothing.");
			return;
		}

		if (!this.srvcApp.isLogout())
		{
			//console.info("kwAuth0Ctrl::inspectApp() app state is logout - logging out");
			this.srvcAuth0.logout();
			return;
		}

		//console.info("kwAuth0Ctrl::inspectApp() logging in");

		this.login();
	}

	login()
	{
		//console.log("kwAuth0Ctrl::login() called ");

		const data: kwCred = this.srvcLogin.get();
		if ( kwCred.is(data))
		{
			console.error("kwAuth0Ctrl::login() data is invalid.");
			return;
		}
		//console.info("kwAuth0Ctrl::login() data is ", data);

		const sUsername = data.sUserName;
		if (!kw.isString(sUsername))
		{
			console.error("kwAuth0Ctrl::login() sUsername is invalid.");
			return false;
		}
		//console.info("kwAuth0Ctrl::login() sUsername is ", sUsername);

		const sPassword = data.sPassword;
		if (!kw.isString(sPassword))
		{
			console.error("kwAuth0Ctrl::login() sPassword is invalid.");
			return false;
		}
		//console.info("kwAuth0Ctrl::login() sPassword is ", sPassword);

		const sConnName = this.srvcBS.getConnName();
		if (!kw.isString(sConnName))
		{
			console.error("kwAuth0Ctrl::login() sConnName is invalid.");
			return false;
		}
		//console.info("kwAuth0Ctrl::login() sConnName is ", sConnName);

		const sScope = this.srvcBS.getScope();
		if (!kw.isString(sScope))
		{
			console.error("kwAuth0Ctrl::login() sScope is invalid.");
			return false;
		}
		//console.info("kwAuth0Ctrl::login() sScope is ", sScope);

		const options = {
			sso: false,
			username: sUsername,
			password: sPassword,
			connection: sConnName,
			scope: sScope
		}

		this.srvcAuth0.login(options, this.onSuccess, this.onFail);
	}

	onFail(): void
	{
		//console.log("kwAuth0Ctrl::onFail() called ");

	}

	onSuccess(profile, idToken): void
	{
		//console.log("kwAuth0Ctrl::onSuccess() called ");

		if ( kw.isNull(idToken))
		{
			console.error("kwAuth0Ctrl::onSuccess() idToken is invalid.");
			this.srvcLoginErr.change(profile);
			return;
		}

		//console.debug("kwAuth0Ctrl::onSuccess() idToken is ", idToken);

		this.srvcAuth0.change(idToken);
	}

	retrieveApis(): void
	{
		//console.log("kwAuth0Ctrl::retrieveApis() called");

		//const api: kwApi = this.srvcApis.getApi(sSTATE);
		//if (!kwApi.is(api))
		//{
		//	//console.info("kwAuth0Ctrl::retrieveApis() apis is invalid.");
		//	return;
		//}
		//console.debug("kwAuth0Ctrl::retrieveApis() apis is ", api);

		//this.srvcApisApi.change(api);
	}

	retrieveMdls(): void
	{
		//console.log("kwAuth0Ctrl::retrieveMdls() called");


	}

}
