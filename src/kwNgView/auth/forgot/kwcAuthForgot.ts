/**********************************************************************
 *
 * kwNgComp/auth/forgot/kwcAuthForgot.ts
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
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {fadeInAnim} from '@kwNgView/fadeIn/kwFadeIn';

//@formatter:on


@Component({
    selector: 'kwc-auth-forgot',
    templateUrl: './kwcAuthForgot.html',
    styleUrls: ['./kwcAuthForgot.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwcAuthForgot implements OnInit {

    email: string;
    password: string;

    constructor(private router: Router) {
        //console.log("kwcAuthForgot::constructor() called");
    }

    ngOnInit() {
        //console.log("kwcAuthForgot::ngOnInit() called");
    }

    send() {
        //console.log("kwcAuthForgot::send() called");
        this.router.navigate(['/']);
    }

}
