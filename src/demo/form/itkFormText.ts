/**********************************************************************
 *
 * app/form/itkFormText.ts
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
import { Input }                from '@angular/core';
import { Output }               from '@angular/core';

import { itkCritType }          from "../class/crit/itkCritType";
// @formatter:on

@Component({
	selector: 'itk-form-text',
	templateUrl: './itkFormText.html'
})
export class itkFormText
{
	@Input() group: FormGroup;
	@Input() crit: itkCritType;

	@Output() cancel = new EventEmitter<boolean>();

	constructor()
	{
		//console.log("itkFormText::constructor() called.");
	}

	onCancel(): void
	{
		//console.log("itkFormText::onCancel() called.");

		this.cancel.emit(true);
	}

}
