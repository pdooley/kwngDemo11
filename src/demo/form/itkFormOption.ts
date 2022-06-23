/**********************************************************************
 *
 * app/form/itkFormOption.ts
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
import { FormGroup }            from '@angular/forms';
import { Input }                from "@angular/core";
import { OnInit }               from '@angular/core';
import { Output }               from '@angular/core';

import { itkCritType }          from "../class/crit/itkCritType";
// @formatter:on


@Component({
	selector: 'itk-form-option',
	templateUrl: './itkFormOption.html'
})
export class itkFormOption implements OnInit
{
	@Input() group: FormGroup;
	@Input() crit: itkCritType;

	@Output() cancel = new EventEmitter<boolean>();

	constructor()
	{
		//console.log("itkFormOption::constructor() called.");
	}

	ngOnInit(): void
	{
		//console.log("itkFormOption::ngOnInit() called.");

	}

	onCancel(): void
	{
		//console.log("itkFormOption::onCancel() called.");

		this.cancel.emit(true);
	}

}
