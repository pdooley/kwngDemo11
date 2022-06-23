/**********************************************************************
 *
 * kwcComp/state/user/kwcUserMod.ts
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

import {kwcUser} from './kwcUser';
import {kwcUserCtrlView} from './kwcUserCtrlView';
import {kwcUserView} from './kwcUserView';


@NgModule(
    {
        imports:
            [],
        declarations:
            [
                kwcUser,
                kwcUserCtrlView,
            ],
        providers:
            [
                kwcUserView,
            ],
        exports:
            [
                kwcUser,
                kwcUserCtrlView,
            ]
    })
//@formatter:on
export class kwcUserMod {

    constructor() {
        //console.log('kwcUserMod::constructor() called.');
    }
}
