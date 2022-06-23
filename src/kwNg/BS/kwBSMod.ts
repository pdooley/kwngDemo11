/**********************************************************************
 *
 * kwNg/BS/kwBSMod.ts
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
import {ModuleWithProviders}    from '@angular/core';


import {kwBSApiMod}          from './api/kwBSApiMod';
import {kwBSApisMod}         from './apis/kwBSApisMod';
import {kwBSAttrsMod}        from './attrs/kwBSAttrsMod';
import {kwBSAutoLoginMod}    from './autoLogin/kwBSAutoLoginMod';
import {kwBSAWSMod}          from './aws/kwBSAWSMod';
import {kwBSCredMod}         from './cred/kwBSCredMod';
import {kwBSCurrMod}         from './curr/kwBSCurrMod';
import {kwBSCurrsMod}        from './currs/kwBSCurrsMod';
import {kwBSCustomMod}       from './custom/kwBSCustomMod';
import {kwBSDispMod}         from './disp/kwBSDispMod';
import {kwBSFltrMod}         from './fltr/kwBSFltrMod';
import {kwBSLangMod}         from './lang/kwBSLangMod';
import {kwBSLangsMod}        from './langs/kwBSLangsMod';
import {kwBSMdlMod}          from './mdl/kwBSMdlMod';
import {kwBSMdlsMod}         from './mdls/kwBSMdlsMod';
import {kwBSModeMod}         from './mode/kwBSModeMod';
import {kwBSRsltMod}         from './rslt/kwBSRsltMod';
import {kwBSRoutesMod}       from './routes/kwBSRoutesMod';
import {kwBSSrvcMod}         from './srvc/kwBSSrvcMod';
import {kwBSSrvcsMod}        from './srvcs/kwBSSrvcsMod';
import {kwBSStatusMod}       from './status/kwBSStatusMod';
import {kwBSTokenMod}        from './token/kwBSTokenMod';
import {kwBSTokensMod}       from './tokens/kwBSTokensMod';
import {kwBSTraceMod}        from './trace/kwBSTraceMod';
import {kwBSTraceAppMod}     from './traceApp/kwBSTraceAppMod';
import {kwBSTZMod}           from './TZ/kwBSTZMod';
import {kwBSTZsMod}          from './TZs/kwBSTZsMod';
import {kwBSUserMod}         from './user/kwBSUserMod';

import {kwBS}                from './kwBS';
import {kwBSCtrlVal}         from './kwBSCtrlVal';
import {kwBSVal}             from './kwBSVal';

@NgModule(
{
    imports:
    [
        kwBSApiMod,
        kwBSApisMod,
        kwBSAttrsMod,
        kwBSAutoLoginMod,
        kwBSAWSMod,
        kwBSCredMod,
        kwBSCurrMod,
        kwBSCurrsMod,
        kwBSCustomMod,
        kwBSDispMod,
        kwBSFltrMod,
        kwBSLangMod,
        kwBSLangsMod,
        kwBSMdlMod,
        kwBSMdlsMod,
        kwBSModeMod,
        kwBSRsltMod,
        kwBSRoutesMod,
        kwBSSrvcMod,
        kwBSSrvcsMod,
        kwBSStatusMod,
        kwBSTokenMod,
        kwBSTokensMod,
        kwBSTraceMod,
        kwBSTraceAppMod,
        kwBSTZMod,
        kwBSTZsMod,
        kwBSUserMod,
    ],
    declarations:
    [
        kwBS,
        kwBSCtrlVal
    ],
    exports:
    [
        kwBS,
        kwBSCtrlVal,

        kwBSApiMod,
        kwBSApisMod,
        kwBSAttrsMod,
        kwBSAutoLoginMod,
        kwBSAWSMod,
        kwBSCredMod,
        kwBSCurrMod,
        kwBSCurrsMod,
        kwBSCustomMod,
        kwBSDispMod,
        kwBSFltrMod,
        kwBSLangMod,
        kwBSLangsMod,
        kwBSMdlMod,
        kwBSMdlsMod,
        kwBSModeMod,
        kwBSRsltMod,
        kwBSRoutesMod,
        kwBSSrvcMod,
        kwBSSrvcsMod,
        kwBSStatusMod,
        kwBSTokenMod,
        kwBSTokensMod,
        kwBSTraceMod,
        kwBSTraceAppMod,
        kwBSTZMod,
        kwBSTZsMod,
        kwBSUserMod,
    ],
    providers:
    [
        kwBSVal,
    ]

})
//@formatter:on
export class kwBSMod {

    constructor()
    {
        //console.log('kwBSMod::constructor() called.');
    }


}
