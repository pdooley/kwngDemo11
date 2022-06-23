/**********************************************************************
 *
 * app/form/itkFormComplete.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import { Component }            from '@angular/core';
import { EventEmitter }         from '@angular/core';
import { Input }                from "@angular/core";
import { Output }               from '@angular/core';

import { itkCritType }          from "../class/crit/itkCritType";
// @formatter:on

@Component({
	selector: 'itk-form-complete',
	templateUrl: './itkFormComplete.html'
})
export class itkFormComplete
{
	@Input() crit: itkCritType;

	@Output() cancel = new EventEmitter<boolean>();
	@Output() submit = new EventEmitter<boolean>();

	constructor()
	{
		//console.log("itkFormComplete::constructor() called.");
	}

	onCancel(): void
	{
		//console.log("itkFormComplete::onCancel() called.");

		this.cancel.emit(true);
	}

	onSubmit(): void
	{
		//console.log("itkFormComplete::onSubmit() called.");

		this.submit.emit(true);
	}

}
