/**********************************************************************
 *
 * kwNgComp/auth/register/kwcAuthRegister.ts
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

import {fadeInAnim} from "@kwNgView/fadeIn/kwFadeIn";

//@formatter:on


@Component({
    selector: 'kwc-auth-register',
    templateUrl: './kwcAuthRegister.html',
    styleUrls: ['./kwcAuthRegister.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwcAuthRegister implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwcAuthRegister::constructor() called");
    }

    ngOnInit() {
        //console.log("kwcAuthRegister::ngOnInit() called");
    }

    send() {
        //console.log("kwcAuthRegister::send() called");
        this.router.navigate(['/']);
    }

}
