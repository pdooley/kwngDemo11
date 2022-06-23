import { ChangeDetectorRef }    from '@angular/core';
import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { FormBuilder }          from '@angular/forms';
import { FormGroup  }           from '@angular/forms';
import { Validators }           from '@angular/forms';
import { Router }               from '@angular/router';
import { Subscription }         from "rxjs/Subscription";

import { fadeOutAnimation }     from '@appCore/common/route.animation';

import {kw}                     from "@kw/kw";
import {kwBSAutoLoginVal}       from "@kwNgBS/autoLogin/kwBSAutoLoginVal";
import {kwBSCredVal}            from "@kwNgBS/cred/kwBSCredVal";
import {kwCred}                 from "@kwClass/cred/kwCred";
import {kwSigninMsgFcty}        from "@kwNgState/signin/kwSigninMsgFcty";
import {kwSigninMsg}            from "@kwNgState/signin/kwSigninMsg";
import {kwMsg}                  from "@kwClass/msg/kwMsg";

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
//  host: {
//    '[@fadeInAnimation]': 'true'
//  },
//  animations: [fadeOutAnimation]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

	subAuto: Subscription;
	subCred: Subscription;

  inputType = 'password';
  visible = false;

  constructor(
  	private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private srvcAuto: kwBSAutoLoginVal,
    private srvcCred: kwBSCredVal,
    private srvcMsg: kwSigninMsg,
    private srvcFcty: kwSigninMsgFcty  )
  { }

  ngOnInit() {

	  this.subAuto = this.srvcAuto.changed$.subscribe(info =>
	  {
		  this.inspect();
	  });

	  this.subCred = this.srvcCred.changed$.subscribe(info =>
	  {
		  this.inspect();
	  });

	  this.inspect();
  }

	send()
	{
		//console.log('login.component::onLogin() called.');

		if (kw.isNull(this.form))
		{
			console.error("login.component::onLogin() form is invalid.")
			return;
		}
		//console.info("login.component::onLogin() form is [", this.form.value, "]");

		const msg: kwMsg = this.srvcFcty.add(this.form.value, []);
		if (!kwMsg.is(msg))
		{
			console.error("login.component::onLogin() error creating msg");
			return;
		}

		this.srvcMsg.change(msg);
	}
	
	inspect()
	{
		//console.log('login.component::inspect() called.');

		const cred: kwCred = this.srvcCred.get();
		if (!kwCred.is(cred))
		{
			//console.info("login.component::inspect() cred is not yet set.")
			return;
		}
		//console.info("login.component::inspect() cred is ", cred)
		//console.info("login.component::inspect() [cred] is set.")

		const bAuto: boolean = this.srvcAuto.get();
		if (!kw.isBoolean(bAuto))
		{
			//console.info("login.component::retrieveAuto() bAuto is not yet set.")
			return;
		}
		//console.info("login.component::inspect() bAuto is ", bAuto)
		//console.info("login.component::inspect() [cred, bAuto] are set.")

		const sPassword = cred.getPassword();
		if (!kw.isString(sPassword))
		{
			console.error("login.component::inspect() sPassword is invalid.")
			return;
		}
		//console.info("login.component::inspect() sPassword is [", sPassword, "]");

		const sUsername = cred.getUserName();
		if (!kw.isString(sUsername))
		{
			console.error("login.component::inspect() sUsername is invalid.")
			return;
		}
		//console.info("login.component::inspect() sUsername is [", sUsername, "]");

		this.form = this.fb.group({
			email: [sUsername, Validators.required],
			password: [sPassword, Validators.required]
		});

		if (bAuto)
		{
			//console.info("login.component::inspect() logging in automatically.")
			this.send();
		}

	}

  show() {
    this.inputType = 'text';
    this.visible = true;
    this.cd.markForCheck();
  }

  hide() {
    this.inputType = 'password';
    this.visible = false;
    this.cd.markForCheck();
  }
}
