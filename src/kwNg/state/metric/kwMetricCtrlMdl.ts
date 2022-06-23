/**********************************************************************
 *
 * kwNg/ctrl/metric/kwMetricCtrlMdl.ts
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

import { Component }        from '@angular/core';

import { kwBSCurrsMap }     from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }     from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }       from "@kwNgBS/TZs/kwBSTZsMap";
import { kwMdlsList }        from "@kwNgState/mdls/kwMdlsList";
import { kwNgCtrlMdl }      from "@kwNgClass/kwNgCtrlMdl";

import { kwMetricMdl }      from "./kwMetricMdl";

//@formatter:off


const sSTATE: string = "metric";


@Component({
	selector: 'kw-metric-ctrl-mdl',
	template: `<br>`,
})
export class kwMetricCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwMetricMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwMetricCtrlMdl::constructor() called");
	}
}
