/**********************************************************************
 *
 * app/ctrl/TA/itkTAState.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { Component }					from '@angular/core';
import { OnDestroy }					from '@angular/core';
import { OnInit }						from '@angular/core';
// @formatter:off

const sKEY: string = 'DefTripAdvisorUrl';

@Component({
	selector: 'itk-tripadvisor-state',
	template: `<br>`,
})
export class itkTAState implements OnInit, OnDestroy
{

	constructor(		)
	{

		//console.log("itkTAState::constructor() called");
	}

	ngOnDestroy()
	{
		//console.log("itkTAState::ngOnDestroy() called");

	};

	ngOnInit()
	{
		//console.log("itkTAState::ngOnInit() called");

	};




}
