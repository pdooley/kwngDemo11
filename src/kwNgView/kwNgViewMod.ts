/**********************************************************************
 *
 * kwNgComp/kwNgViewMod.ts
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
import {CommonModule} from '@angular/common';

import {kwNgViewCoreMod} from './core/kwNgViewCoreMod';

import {kwDynMod} from './dyn/kwDynMod';
import {kwcAuthMod} from './auth/kwcAuthMod';
import {kwcBdyMod} from './bdy/kwcBdyMod';
import {kwcBtnMod} from './btn/kwcBtnMod';
import {kwcChkMod} from './chk/kwcChkMod';
import {kwcContentMod} from './content/kwcContentMod';
import {kwcCrumbsMod} from './crumbs/kwcCrumbsMod';
import {kwcDlgMod} from './dlg/kwcDlgMod';
import {kwcFormMod} from './form/kwcFormMod';
import {kwcFtrMod} from './ftr/kwcFtrMod';
import {kwcHdrMod} from './hdr/kwcHdrMod';
import {kwcImgMod} from './img/kwcImgMod';
import {kwcInputMod} from './input/kwcInputMod';
import {kwcLinkMod} from './link/kwcLinkMod';
import {kwcLinkTagMod} from './linkTag/kwcLinkTagMod';
import {kwcListMod} from './list/kwcListMod';
import {kwcLogoMod} from './logo/kwcLogoMod';
import {kwcNavMod} from './nav/kwcNavMod';
import {kwcOptsMod} from './opts/kwcOptsMod';
import {kwcPageMod} from './page/kwcPageMod';
import {kwcPageNotFoundMod} from './pageNotFound/kwcPageNotFoundMod';
import {kwcRouterMod} from './router/kwcRouterMod';
import {kwcRowsMod} from './rows/kwcRowsMod';
import {kwcSelectMod} from './select/kwcSelectMod';
import {kwcSideMod} from './side/kwcSideMod';
import {kwcSpanMod} from './span/kwcSpanMod';
import {kwcStateMod} from './state/kwcStateMod';
import {kwcSubTitleMod} from './subTitle/kwcSubTitleMod';
import {kwcSvgMod} from './svg/kwcSvgMod';
import {kwcTabMod} from './tab/kwcTabMod';
import {kwcTabHorMod} from './tabHor/kwcTabHorMod';
import {kwcTabsMod} from './tabs/kwcTabsMod';
import {kwcTblMod} from './tbl/kwcTblMod';
import {kwcTitleMod} from './title/kwcTitleMod';
import {kwcUtilMod} from './util/kwcUtilMod';

import {kwNgView} from './kwNgView';

@NgModule(
    {
        imports:
            [
                CommonModule,
                kwNgViewCoreMod,

                kwcAuthMod,
                kwcBdyMod,
                kwcBtnMod,
                kwcChkMod,
                kwcContentMod,
                kwcCrumbsMod,
                kwcDlgMod,
                kwcFormMod,
                kwcFtrMod,
                kwcHdrMod,
                kwcImgMod,
                kwcInputMod,
                kwcLinkMod,
                kwcLinkTagMod,
                kwcListMod,
                kwcLogoMod,
                kwcNavMod,
                kwcOptsMod,
                kwcRouterMod,
                kwcPageMod,
                kwcPageNotFoundMod,
                kwcRowsMod,
                kwcSelectMod,
                kwcSideMod,
                kwcSpanMod,
                kwcStateMod,
                kwcSubTitleMod,
                kwcSvgMod,
                kwcTabMod,
                kwcTabsMod,
                kwcTabHorMod,
                kwcTblMod,
                kwcTitleMod,
                kwcUtilMod,

                kwDynMod,
            ],
        declarations:
            [
                kwNgView,
            ],
        exports:
            [
                kwNgView,

                kwNgViewCoreMod,

                CommonModule,

                kwcAuthMod,
                kwcBdyMod,
                kwcBtnMod,
                kwcChkMod,
                kwcContentMod,
                kwcCrumbsMod,
                kwcDlgMod,
                kwcFormMod,
                kwcFtrMod,
                kwcHdrMod,
                kwcImgMod,
                kwcInputMod,
                kwcLinkMod,
                kwcLinkTagMod,
                kwcListMod,
                kwcLogoMod,
                kwcNavMod,
                kwcOptsMod,
                kwcPageMod,
                kwcRouterMod,
                kwcPageNotFoundMod,
                kwcRowsMod,
                kwcSelectMod,
                kwcSideMod,
                kwcSpanMod,
                kwcStateMod,
                kwcSubTitleMod,
                kwcSvgMod,
                kwcTabMod,
                kwcTabsMod,
                kwcTabHorMod,
                kwcTblMod,
                kwcTitleMod,
                kwcUtilMod,

                kwDynMod,
            ]
    })
//@formatter:on
export class kwNgViewMod {

    constructor() {
        //console.log('kwNgViewMod::constructor() called.');
    }
}
