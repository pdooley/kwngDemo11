/**********************************************************************
 *
 * kwNg/state/kwStateMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import { kwAccMod}	            from "./acc/kwAccMod";
import { kwAccCreateMod}	    from "./accCreate/kwAccCreateMod";
import { kwAccsMod}	            from "./accs/kwAccsMod";
import { kwAccTypeMod }	        from "./accType/kwAccTypeMod";
import { kwActTagMod}	        from "./actTag/kwActTagMod";
import { kwActTagsMod}	        from "./actTags/kwActTagsMod";
import { kwApiMod}	            from "./api/kwApiMod";
import { kwApisMod}	            from "./apis/kwApisMod";
import { kwAppMod}	            from "./app/kwAppMod";
import { kwAuth0Mod}	        from "./auth0/kwAuth0Mod";
import { kwCredMod}	            from "./cred/kwCredMod";
import { kwErrMod }	            from "./err/kwErrMod";
import { kwHttpMod }	        from "./http/kwHttpMod";
import { kwInitsMod }	        from "./inits/kwInitsMod";
import { kwIsRootMod }	        from "./isRoot/kwIsRootMod";
import { kwLoginMod }		    from "./login/kwLoginMod";
import { kwLoginErrMod }	    from "./loginErr/kwLoginErrMod";
import { kwMdlMod }             from "./mdl/kwMdlMod";
import { kwMdlsMod }            from "./mdls/kwMdlsMod";
import { kwMetricMod }          from "./metric/kwMetricMod";
import { kwMetricsMod }         from "./metrics/kwMetricsMod";
import { kwOrgMod }             from "./org/kwOrgMod";
import { kwRedirectMod }        from "./redirect/kwRedirectMod";
import { kwSigninMod }          from "./signin/kwSigninMod";
import { kwSignoutMod }         from "./signout/kwSignoutMod";
import { kwSignupMod }          from "./signup/kwSignupMod";
import { kwViewsMod}            from "./views/kwViewsMod";

import {kwState}                from './kwState';

@NgModule(
{
	imports:
	[
        kwAccMod,
        kwAccCreateMod,
        kwAccsMod,
        kwAccTypeMod,
        kwActTagMod,
        kwActTagsMod,
        kwApiMod,
        kwApisMod,
        kwAppMod,
        kwAuth0Mod,
        kwCredMod,
        kwErrMod,
		kwHttpMod,
		kwInitsMod,
        kwIsRootMod,
        kwLoginMod ,
        kwLoginErrMod ,
        kwMdlMod ,
        kwMdlsMod ,
        kwMetricMod,
        kwMetricsMod ,
        kwOrgMod,
        kwRedirectMod ,
        kwSigninMod ,
        kwSignoutMod ,
        kwSignupMod ,
        kwViewsMod,
	],
	declarations:
	[
		kwState,
	],
	exports:
	[
	    kwState,

        kwAccMod,
        kwAccCreateMod,
        kwAccsMod,
        kwAccTypeMod,
        kwActTagMod,
        kwActTagsMod,
        kwApiMod,
        kwApisMod,
        kwAppMod,
        kwAuth0Mod,
        kwCredMod,
        kwErrMod,
        kwHttpMod,
		kwInitsMod,
        kwIsRootMod,
        kwLoginMod ,
        kwLoginErrMod ,
        kwMdlMod ,
        kwMdlsMod ,
        kwMetricMod,
        kwMetricsMod ,
        kwOrgMod,
        kwRedirectMod ,
        kwSigninMod ,
        kwSignoutMod ,
        kwSignupMod ,
        kwViewsMod,
	],
	providers:
	[

	]
})
//@formatter:on
export class kwStateMod {

	constructor()
	{
		//console.log('kwStateMod::constructor() called.');
	}
}
