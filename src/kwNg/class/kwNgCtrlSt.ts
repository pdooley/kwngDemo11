/**********************************************************************
 *
 * kwNgInit/state//kwNgCtrlSt.ts
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
import { OnInit }			from '@angular/core';
import { OnDestroy }		from '@angular/core';
import { Subscription }		from 'rxjs/Subscription';

import { kwCtrlSt }       	from "@kwCtrl/kwCtrlSt";

import { kwNgStDataList }   from "./kwNgStDataList";
import { kwNgStDataVal }    from "./kwNgStDataVal";



export class kwNgCtrlSt   	extends kwCtrlSt
							implements OnInit, OnDestroy
{
	private subSt: Subscription;

	constructor(
		srvcSrc: kwNgStDataList,
		srvcDst: kwNgStDataVal,
		sState: string          )
	{
		super(
			srvcSrc,
			srvcDst,
			sState  );

		//console.log(this.sClass, "::constructor() called");
	}

//@formatter:on

	ngOnInit()
	{
		//console.log(this.sClass, "::ngOnInit() called");

		this.subSt = (<kwNgStDataList>this.srvcSrc).changed$.subscribe(info =>
		{
			this.load();
		});
	}

	ngOnDestroy()
	{
		//console.log(this.sClass, "::ngOnDestroy() called.");
		this.subSt.unsubscribe();
	}

}
