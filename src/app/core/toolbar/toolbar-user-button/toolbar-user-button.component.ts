import { Component, OnInit }    from '@angular/core';
import {Subscription }			from 'rxjs/Subscription';

import {kw}                     from "@kw/kw";
import {kwBSUserList}           from '@kwNgBS/user/kwBSUserList';

@Component({
  selector: 'fury-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {
	subUser: Subscription;

  isOpen: boolean;

	sName: string;
	sImg: string;

  constructor(private srvcUser: kwBSUserList)
  {
	  //console.log("toolbar-user-button::constructor() called.");
  }

  ngOnInit()
  {
	  //console.log("toolbar-user-button::ngOnInit() called.");

	  this.subUser = this.srvcUser.changed$.subscribe(info =>
	  {
		  this.load();
	  });

	  this.load();
  }

  toggleDropdown() {
	  //console.log("toolbar-user-button::toggleDropdown() called.");
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
	  //console.log("toolbar-user-button::onClickOutside() called.");
	  this.isOpen = false;
  }

  load()
  {
	  //console.log("toolbar-user-button::load() called.");
	  const sName: string = this.srvcUser.getName();
	  if (!kw.isString(sName))
	  {
		  //console.info("toolbar-user-button::load() sName is not yet loaded.");
		  return;
	  }
	  //console.info("toolbar-user-button::load() sName is [", sName, "]");

	  this.sName = sName;

	  const sImg: string = this.srvcUser.getImg();
	  if (!kw.isString(sImg))
	  {
		  console.error("toolbar-user-button::load() sImg is invalid.");
		  return;
	  }
	  //console.info("toolbar-user-button::load() sImg is [", sImg, "]");

	  this.sImg = sImg;

  }

}
