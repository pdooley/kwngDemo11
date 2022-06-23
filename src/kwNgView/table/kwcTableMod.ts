import {NgModule} from '@angular/core';

import {kwNgViewCoreMod} from '@kwNgViewCore/kwNgViewCoreMod';

import {PageModule} from '@appCore/common/page/page.module';

import {kwcCreateMod} from './create/kwcCreateMod';
import {kwcCrumbsMod} from '@kwNgView/crumbs/kwcCrumbsMod';
import {kwcListMod} from '@kwNgView/list/kwcListMod';

import {kwcTable} from './kwcTable';
import {DATA} from './data';

@NgModule(
    {
        imports:
            [
                kwNgViewCoreMod,

                kwcCreateMod,
                kwcCrumbsMod,
                kwcListMod,

                PageModule,

            ],
        declarations:
            [
                kwcTable
            ],
        providers:
            [],
        exports:
            [
                kwcTable,
            ]
    })
export class kwcTableMod {
}
