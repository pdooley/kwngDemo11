/**********************************************************************
 *
 * kwNg/ctrl/app/kwAppCtrlVal.ts
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
import { OnDestroy }            from '@angular/core';
import { Router }                from '@angular/router';
import { Subscription }            from 'rxjs/Subscription';

import { kw }                   from "@kw/kw"
import { kwApisList }           from "@kwNgState/apis/kwApisList";
import { kwApp }                from "@kwClass/app/kwApp";
import { kwAppInit }            from "@kwClass/app/kwAppInit";;
import { kwAppLoggedIn}         from "@kwClass/app/kwAppLoggedIn";
import { kwAppLogin }           from "@kwClass/app/kwAppLogin";
import { kwAppVerify }          from "@kwClass/app/kwAppVerify";
import { kwBSRoutesVal}         from "@kwNgBS/routes/kwBSRoutesVal";
import { kwBSStatusVal }        from "@kwNgBS/status/kwBSStatusVal";
import { kwBSStat }             from "@kwClass/BSStat/kwBSStat";
import { kwBSTokensMap}         from "@kwNgBS/tokens/kwBSTokensMap";
import { kwBSTraceAppVal }      from "@kwNgBS/traceApp/kwBSTraceAppVal";
import { kwBSUserList}          from "@kwNgBS/user/kwBSUserList";
import { kwLoginVal }           from "@kwNgState/login/kwLoginVal";
import { kwNgStDataVal }        from "@kwNgClass/kwNgStDataVal";
import { kwSigninApi }          from "@kwNgState/signin/kwSigninApi";
import { kwSigninMdl }          from "@kwNgState/signin/kwSigninMdl";
import { kwSigninView }         from "@kwNgState/signin/kwSigninView";
import { kwAppEnum }            from "@kwClass/app/kwAppEnum";
import { kwMsg }                from "@kwClass/msg/kwMsg";

import { kwAppVal }             from "./kwAppVal";

//@formatter:on


@Component({
    selector: 'kw-app-ctrl-val',
    template: `<br>`,
})
export class kwAppCtrlVal implements OnInit, OnDestroy
{
    subApis: Subscription;
    subApp: Subscription;
    subBSStat: Subscription;
    subLogin: Subscription;
    subSigninApi: Subscription;
    subSigninMdl: Subscription;
       subSigninView: Subscription;
    subUser: Subscription;
    subTokens: Subscription;

    sLogin    : string;
    sReset    : string;
    sMain    : string;

    constructor(
        private router: Router,
        private srvcApis: kwApisList,
        private srvcApp: kwAppVal,
        private srvcBSStat: kwBSStatusVal,
        private srvcLogin: kwLoginVal,
        private srvcRoutes: kwBSRoutesVal,
        private srvcSigninApi: kwSigninApi,
        private srvcSigninMdl: kwSigninMdl,
        private srvcSigninView: kwSigninView,
        private srvcUser: kwBSUserList,
        private srvcTokens: kwBSTokensMap,
        private srvcTrace: kwBSTraceAppVal )
    {
        //console.log("kwAppCtrlVal::constructor() called");
    }

    ngOnInit(): boolean
    {
        //console.log("kwAppCtrlVal::ngOnInit() called");

        this.subApis = this.srvcApis.changed$.subscribe(info =>
        {
            //this.inspectApis(info);
        });

        this.subApp = this.srvcApp.changed$.subscribe(info =>
        {
            this.inspectApp(info);
        });

        this.subBSStat = this.srvcBSStat.changed$.subscribe(info =>
        {
            this.inspectBS(info);
        });

        this.subLogin = this.srvcLogin.changed$.subscribe(info =>
        {
            //this.inspectLogin(info);
        });

        this.subSigninApi = this.srvcSigninApi.changed$.subscribe(info =>
        {
            this.inspectSignin();
        });

        this.subSigninMdl = this.srvcSigninMdl.changed$.subscribe(info =>
        {
            this.inspectSignin();
        });

        this.subSigninView = this.srvcSigninView.changed$.subscribe(info =>
        {
            this.inspectSignin();
        });

        this.subUser = this.srvcUser.changed$.subscribe(info =>
        {
            this.inspectUser();
        });

        this.subTokens = this.srvcTokens.changed$.subscribe(info =>
        {
            this.inspectUser();
        });

        return true;
    }

    ngOnDestroy()
    {
        //console.log("kwBSAppCtrlApi::ngOnDestroy() called.");

        this.subApis.unsubscribe();
        this.subApp.unsubscribe();
        this.subBSStat.unsubscribe();
        this.subLogin.unsubscribe();
        this.subSigninApi.unsubscribe();
        this.subSigninMdl.unsubscribe();
        this.subSigninView.unsubscribe();
        this.subUser.unsubscribe();
        this.subTokens.unsubscribe();
    }

    protected load(srvcSrc: kwNgStDataVal): boolean
    {
        //console.log("kwAppCtrlVal::load() called");
        return true;
    }

    inspectApis(msg)
    {
        //console.log("kwAppCtrlVal::inspectApi() called");

        if (kw.isNull(msg))
        {
            console.error("kwAppCtrlVal::inspectApi() data is invalid.");
            return;
        }

        const app = new kwAppLogin();
        if (!app.init())
        {
            console.error("kwAppCtrlVal::inspectApi() unable to initialize app.");
            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectApi() Api info loaded - Logging in ");
        }

        this.srvcApp.change(app);
    }

    inspectApp(app: kwApp) : void
    {
        //console.log("kwAppCtrlVal::inspectApp() called");

        if (!this.retrieveRoutes())
        {
            console.error("kwAppCrlVal::inspectApp() error retrieving routes.");
            return;
        }

        if (!kwApp.is(app))
        {
            console.error("kwAppCtrlVal::inspectApp() app is invalid.");
            return;
        }

        if (!kw.isString(this.sLogin) || this.sLogin.length === 0)
        {
            console.error("kwAppCtrlVal::inspectApp() sLogin is invalid.");
            return;
        }

        if (!kw.isString(this.sMain))
        {
            console.error("kwAppCtrlVal::inspectApp() sMain is invalid.");
            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectApp() sMain is [", this.sMain, "]");
        }

        const type = app.getType();

        switch (type)
        {
            case kwAppEnum.login:
            {
                if (this.srvcTrace.get())
                {
                    //console.info("kwAppCtrlVal::inspectApp() logging in!.");
                }

                this.router.navigate([this.sLogin]);
                break;
            }

            case kwAppEnum.loggedin:
            {
                if (this.srvcTrace.get())
                {
                    //console.info("kwAppCtrlVal::inspectApp() logged in - going to dashboard!.");
                }

                this.router.navigate([this.sMain]);
                break;
            }

            case kwAppEnum.loggedout:
            {
                console.error("kwAppCtrlVal::inspectApp() loggedout - logging in!.");
                this.router.navigate([this.sLogin]);
                break;
            }

            default:
            {
                //console.info("kwAppCtrlVal::inspectApp() - doing nothing.");
                return;
            }
        }
    }

    inspectBS(info: kwBSStat) : void
    {
        //console.log("kwAppCtrlVal::inspectBS() called");

        if (!kwBSStat.is(info))
        {
            console.error("kwAppCtrlVal::inspectBS() info is invalid.");
            return;
        }

        if (!info.isComplete())
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectBS() bootstrap not complete - doing nothing.");
            }

            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectBS() bootstrap is complete - initializing App");
        }

        const init : kwApp = new kwAppInit();
        if (!kwApp.is(init))
        {
            console.error("kwAppCtrlVal::inspectBS() error creating app.");
            return;
        }

        this.srvcApp.change(init);
    }

    inspectLogin(data)
    {
        //console.log("kwAppCtrlVal::inspectLogin() called");

        if (kw.isNull(data))
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectLogin() login data is empty - doing nothing");
            }

            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectLogin() login is ", data);
        }

        const app = new kwAppVerify();
        if (!app.init())
        {
            console.error("kwAppCtrlVal::inspectLogin() unable to initialize app.");
            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectLogin() login is complete - verifying credentials");
        }

        this.srvcApp.change(app);
    }

    inspectSignin()
    {
        //console.log("kwAppCtrlVal::inspectSignin() called");

        const api: Object = this.srvcSigninApi.get();
        if (kw.isNull(api))
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectSignin() [api] is not set - doing nothing");
            }

            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectSignin() [api] is set");
        }

        const mdl: Object = this.srvcSigninMdl.get();
        if (kw.isNull(mdl))
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectSignin() [mdl] is not set - doing nothing");
            }

            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectSignin() [api, mdl] are set");
        }

        const view: Object = this.srvcSigninView.get();
        if (kw.isNull(view))
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectSignin() [view] is not set - doing nothing");
            }

            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectSignin() [api, mdl, view] are set - logging in");
        }

        const app: kwApp = new kwAppLogin();
        if (!kwApp.is(app))
        {
            console.error("kwAppCtrlVal::inspectSignin() error creating app.");
            return;
        }

        this.srvcApp.change(app);
    }

    inspectUser()
    {
        //console.log("kwAppCtrlVal::inspectUser() called");

        const user: Object = this.srvcUser.get();
        if (kw.isNull(user))
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectUser() [user] is not set - doing nothing");
            }

            return;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectUser() user is ", user);
            //console.info("kwAppCtrlVal::inspectUser() [user] is set");
        }

        if (!this.srvcTokens.isOrgSet())
        {
            if (this.srvcTrace.get())
            {
                //console.info("kwAppCtrlVal::inspectUser() org not yet loaded - doing nothing.");
            }

            return;
        }
        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::inspectUser() [user, org] are set - login complete!");
        }

        const app: kwApp = new kwAppLoggedIn();
        if (!kwApp.is(app))
        {
            console.error("kwAppCtrlVal::inspectUser() error creating app.");
            return;
        }

        this.srvcApp.change(app);
    }

    retrieveRoutes(): boolean
    {
        //console.log("kwAppCtrlVal::retrieveRoutes() called");

        if (kw.isString(this.sLogin) && kw.isString(this.sMain))
        {
            return true;
        }

        const routes = this.srvcRoutes.get();
        if (kw.isNull(routes))
        {
            console.error("kwAppCtrlVal::retrieveRoutes() routes is invalid.");
            return false;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::retrieveRoutes() routes are ", routes);
        }

        const sLogin: string = routes.sLogin;
        if (!kw.isString(sLogin) || sLogin.length === 0)
        {
            console.error("kwAppCtrlVal::retrieveRoutes() sLogin is invalid.");
            return false;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::retrieveRoutes() sLogin is [", sLogin, "]");
        }

        this.sLogin = sLogin;


        const sMain: string = routes.sMain;
        if (!kw.isString(sMain))
        {
            console.error("kwAppCtrlVal::retrieveRoutes() sMain is invalid.");
            return false;
        }

        if (this.srvcTrace.get())
        {
            //console.info("kwAppCtrlVal::retrieveRoutes() sMain is [", sMain, "]");
        }

        this.sMain = sMain;


        return true;
    }



}
