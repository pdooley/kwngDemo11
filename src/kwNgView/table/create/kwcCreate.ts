/**********************************************************************
 *
 * kwNgComp/tbl/kwcTable.ts
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
import {Component} from '@angular/core';
import {Inject} from '@angular/core';
import {OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {Customer} from './customer.model';


@Component({
    selector: 'kwc-create',
    templateUrl: './kwcCreate.html',
    styleUrls: ['./kwcCreate.scss']
})
//@formatter:off
export class kwcCreate implements OnInit
{

    static id = 100;

    form: FormGroup;
    mode: 'create' | 'update' = 'create';

    constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
                private dialogRef: MatDialogRef<kwcCreate>,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        if (this.defaults) {
            this.mode = 'update';
        } else {
            this.defaults = {} as Customer;
        }

        this.form = this.fb.group({
            id: [kwcCreate.id++],
            firstName: [this.defaults.firstName || '',],
            lastName: [this.defaults.lastName || ''],
            street: this.defaults.street || '',
            city: this.defaults.city || '',
            zipcode: this.defaults.zipcode || '',
            phoneNumber: this.defaults.phoneNumber || '',
        });
    }

    save() {
        if (this.mode === 'create') {
            this.createCustomer();
        } else if (this.mode === 'update') {
            this.updateCustomer();
        }
    }

    createCustomer() {
        const customer = this.form.value;
        this.dialogRef.close(customer);
    }

    updateCustomer() {
        const customer = this.form.value;
        customer.id = this.defaults.id;

        this.dialogRef.close(customer);
    }

    isCreateMode() {
        return this.mode === 'create';
    }

    isUpdateMode() {
        return this.mode === 'update';
    }
}
