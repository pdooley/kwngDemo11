/**********************************************************************
 *
 * app/comp/crit/itkCritComp.html
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import { ActivatedRoute }       from "@angular/router";
import { Component }            from '@angular/core';
import { Location }             from "@angular/common";
import { OnDestroy }           	from '@angular/core';
import { OnInit }               from '@angular/core';
import { Router }               from '@angular/router';
import { Subscription }         from "rxjs/Subscription";

import { kwMetricMsg }		    from '@kwNgState/metric/kwMetricMsg';
import { kwMetricMsgFcty }		from '@kwNgState/metric/kwMetricMsgFcty';

import { crit }	                from "@itkState/crit/crit";
import { itkGRMetricEnum }      from "@itkEnum/itkGRMetricEnum";
import { OptionChoice }	        from '@itkTypes/option-choice';
import { itkCritList }          from '@itkState/crit/itkCritList';
import { itkOptionsState }      from '@itkState/itkOptionsState';
import { srvcStatePage }        from '@itkState/page/srvcStatePage';


const crit: crit = {
	sPhone: "",
	sEmail: "",
	scrit: "",
};

const sTHANKS = "/thanks";

const eMETRIC = appGRMetricEnum.STEP_TWO_BAD_CANCELLED;


@Component(
{
	selector: 'app-crit',
	templateUrl: './itkCritComp.html',
	styleUrls: [ './itkCritComp.css' ]
})
export class crit implements OnDestroy, OnInit
{

	info: OptionChoice;
	sub: Subscription;

	crit: crit = crit;

	constructor(
		private location: Location,
		private route: ActivatedRoute,
		private router: Router,
		private srvccrit: itkCritList,
		private srvcMetAct: kwMetricMsg,
		private srvcOptions: itkOptionsState,
		private srvcPage: srvcStatePage )
	{
		//console.log("crit::constructor() called.");
	}

	ngOnInit(): void
	{
		//console.log("crit::ngOnInit() called.");

		this.sub = this.route.params.subscribe(params =>
		{
			//console.log("crit::route::changed() called.");

			let nId = +params['id']

			this.retrieveOption(nId);

		})

		this.srvcPage.change(PAGE);

	}

	ngOnDestroy()
	{
		//console.log("crit::ngOnDestroy() called.");

		this.sub.unsubscribe();
	}

	onCancel()
	{
		//console.log("crit::onCancel() called.");

		let data = {
			nMethod: kwActEnum.Post,
			data: {
				"Button": appGRMetricEnum[eMETRIC]
			 }
		};

		this.srvcMetAct.change(data);

		this.location.back();
	}

	onSubmit()
	{
		//console.log("crit::onSubmit() called.");

		if (!this.crit)
		{
			console.error("crit::onSubmit() crit is invalid.");
			return;
		}
		//console.info("crit::onSubmit() crit is [", this.crit, "]");

		if (!this.crit.scrit)
		{
			//console.info("crit::onSubmit() scrit is invalid.");
			return;
		}
		//console.info("crit::onSubmit() scrit is [", this.crit.scrit, "]");

		this.srvccrit.change(this.crit);

		this.router.navigate([sTHANKS]);
	}

	retrieveOption(nId: number): void
	{
		//console.log("crit::retrieveOption() called.");

		if (nId < 0)
		{
			console.error("crit::retrieveOption() nId is invalid.");
			return;
		}
		//console.info("critComponent::retrieveOption() nId is [", nId, "]");

		this.info = this.srvcOptions.getById(nId);
		if (!this.info)
		{
			console.error("crit::retrieveOption() info is invalid.");
			return;
		}
		//console.info("crit::retrieveOption() info is [", this.info, "]");
	}


}


