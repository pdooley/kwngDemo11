//@formatter:off
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { kwLogout }             from './kwLogout';

const logoutRoutes: Routes = [
{
    path: '',
    component: kwLogout,
}];

@NgModule({
	imports: [ RouterModule.forChild(logoutRoutes) ],
	exports: [ RouterModule ]
})
//@formatter:on
export class kwLogoutRtg
{

	constructor()
	{
		//console.log('kwLogoutRtg::constructor() called.');
	}
}
