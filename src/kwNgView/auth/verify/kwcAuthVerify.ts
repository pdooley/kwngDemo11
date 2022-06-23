/**********************************************************************
 *
 * kwNgComp/auth/verify/kwcAuthVerify.ts
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
    selector: 'kwc-auth-verify',
    templateUrl: './kwcAuthVerify.html',
    styleUrls: ['./kwcAuthVerify.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwcAuthVerify implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwcAuthVerify::constructor() called");
    }

    ngOnInit() {
        //console.log("kwcAuthVerify::ngOnInit() called");
    }

    send() {
        //console.log("kwcAuthVerify::send() called");
        this.router.navigate(['/']);
    }

}
