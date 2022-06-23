/**********************************************************************
 *
 * app/form/itkFormContact.ts
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
import { Output }               from '@angular/core';

import { itkCritType }          from "../class/crit/itkCritType";
import { itkGuestType }         from "../class/guest/itkGuestType";
// @formatter:on

@Component({
	selector: 'itk-form-contact',
	templateUrl: './itkFormContact.html'
})
export class itkFormContact
{
	@Input() group: FormGroup;
	@Input() crit: itkCritType;
	@Input() guest: itkGuestType;

	@Output() cancel = new EventEmitter<boolean>();

	constructor()
	{
		//console.log("itkFormContact::constructor() called.");
	}

	onCancel(): void
	{
		//console.log("itkFormContact::onCancel() called.");
		this.cancel.emit(true);
	}
}
