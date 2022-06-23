/**********************************************************************
 *
 * kwNgComp/auth/login/kwcAuthLogin.ts
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
import {fadeInAnim} from "@kwNgView/fadeIn/kwFadeIn";
import {OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {kw} from "@kw/kw";
import {kwtCred} from "../../../kw/class/cred/kwtCred";
import {kwHttpVal} from "../../../kwNg/state/http/kwHttpVal";
import {kwLoginVal} from "../../../kwNg/state/login/kwLoginVal";
import {kwLoginErrVal} from "../../../kwNg/state/loginErr/kwLoginErrVal";

//@formatter:on

@Component({
    selector: 'kwc-auth-login',
    templateUrl: './kwcAuthLogin.html',
    styleUrls: ['./kwcAuthLogin.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwcAuthLogin implements OnInit {
    loginForm: FormGroup;
    loginFormErrors: any;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.loginFormErrors = {
            email: {},
            password: {}
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged() {
        for (let field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {}

            // Get the control
            const control = this.loginForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }
}
