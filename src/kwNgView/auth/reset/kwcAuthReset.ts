/**********************************************************************
 *
 * kwNgComp/auth/reset/kwcAuthReset.ts
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
    selector: 'kwc-auth-reset',
    templateUrl: './kwcAuthReset.html',
    styleUrls: ['./kwcAuthReset.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwcAuthReset implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwcAuthReset::constructor() called");
    }

    ngOnInit() {
        //console.log("kwcAuthReset::ngOnInit() called");
    }

    send() {
        //console.log("kwcAuthReset::send() called");
        this.router.navigate(['/']);
    }

}
