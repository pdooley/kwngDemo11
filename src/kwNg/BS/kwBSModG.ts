/**********************************************************************
 *
 * kwNg/BS/kwBSModG.ts
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
import { NgModule }               from '@angular/core';
import { ModuleWithProviders }    from '@angular/core';

import { kwBSDispVal }            from './disp/kwBSDispVal';
import { kwBSTraceAppVal }        from './traceApp/kwBSTraceAppVal';
import { kwBSUserList }           from './user/kwBSUserList';

@NgModule({})
//@formatter:on
export class kwBSModG {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: kwBSModG,
            providers: [
                kwBSTraceAppVal,
                kwBSDispVal,
                kwBSUserList,
            ]
        }
    }
}
