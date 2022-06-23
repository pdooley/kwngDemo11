/**********************************************************************
 *
 * kwNg/kwNgView/kwcAuthMod.ts
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
import {NgModule} from '@angular/core';

import {kwNgViewCoreMod} from '@kwNgViewCore/kwNgViewCoreMod'

import {kwcAuthForgot} from './forgot/kwcAuthForgot';
import {kwcAuthLock} from './lock/kwcAuthLock';
import {kwcAuthLogin} from './login/kwcAuthLogin';
import {kwcAuthRegister} from './register/kwcAuthRegister';
import {kwcAuthReset} from './reset/kwcAuthReset';
import {kwcAuthVerify} from './verify/kwcAuthVerify';

import {kwcAuth} from './kwcAuth';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,
            ],
        declarations:
            [
                kwcAuth,

                kwcAuthForgot,
                kwcAuthLock,
                kwcAuthLogin,
                kwcAuthRegister,
                kwcAuthReset,
                kwcAuthVerify,
            ],
        providers:
            [],
        exports:
            [
                kwcAuth,

                kwcAuthForgot,
                kwcAuthLock,
                kwcAuthLogin,
                kwcAuthRegister,
                kwcAuthReset,
                kwcAuthVerify,
            ],
        entryComponents:
            [],
    })
//@formatter:on
export class kwcAuthMod {
    constructor() {
        //console.log('kwcAuthMod::constructor() called.');
    }
}
