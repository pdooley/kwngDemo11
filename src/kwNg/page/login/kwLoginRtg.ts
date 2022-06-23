/**********************************************************************
 *
 * kwNg/key/api/kwApiKey.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { kwLogin }             from './kwLogin';

const loginRoutes: Routes = [
{
    path: '',
    component: kwLogin,
}];

@NgModule({
	imports: [ RouterModule.forChild(loginRoutes) ],
	exports: [ RouterModule ]
})
//@formatter:on
export class kwLoginRtg
{

	constructor()
	{
		//console.log('kwLoginRtg::constructor() called.');
	}
}
