/**********************************************************************
 *
 * kw/kwcDlgMod.ts
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

import {kwNgViewCoreMod} from '@kwNgViewCore/kwNgViewCoreMod';

import {kwcDlg} from './kwcDlg';

import {kwDlgAct} from './act/kwDlgAct';
import {kwDlgActs} from './acts/kwDlgActs';
import {kwDlgCont} from './cont/kwDlgCont';
import {kwDlgPage} from './page/kwDlgPage';
import {kwDlgTitle} from './title/kwDlgTitle';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod
            ],
        declarations:
            [
                kwcDlg,

                kwDlgAct,
                kwDlgActs,
                kwDlgCont,
                kwDlgPage,
                kwDlgTitle,
            ],
        providers:
            [],
        exports:
            [
                kwcDlg,

                kwDlgAct,
                kwDlgActs,
                kwDlgCont,
                kwDlgPage,
                kwDlgTitle,
            ]
    })
//@formatter:on
export class kwcDlgMod {

}
