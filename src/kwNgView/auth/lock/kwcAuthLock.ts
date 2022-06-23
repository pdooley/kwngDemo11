/**********************************************************************
 *
 * kwNgComp/auth/lock/kwcAuthLock.ts
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
    selector: 'kwc-auth-lock',
    templateUrl: './kwcAuthLock.html',
    styleUrls: ['./kwcAuthLock.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwcAuthLock implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwcAuthLock::constructor() called");
    }

    ngOnInit() {
        //console.log("kwcAuthLock::ngOnInit() called");
    }

    send() {
        //console.log("kwcAuthLock::send() called");
        this.router.navigate(['/']);
    }

}
