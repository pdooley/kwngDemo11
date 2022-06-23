import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed for Touch functionality of Material Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PendingInterceptorModule } from '../@fury/shared/loading-indicator/pending-interceptor.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';

import { kwNgMod }				          from '@kwNg/kwNgMod';
import { kwNgViewMod }		   		    from '@kwNgView/kwNgViewMod';
import { kwBSModG }                 from '@kwNgBS/kwBSModG';

import { dlStateMod }               from '@dwState/dlStateMod';
import { dwCompMod }                from '@dwComp/dwCompMod';
import { dwCoreMod }                from '@dwCore/dwCoreMod';

import { dwPageMod }                from '@dwPage/dwPageMod';

import {TokenInterceptor}           from "./config/http";


@NgModule({
  imports: [
    // Angular Core Module // Don't remove!
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Fury Core Modules
    AppRoutingModule,

    // Layout Module (Sidenav, Toolbar, Quickpanel, Content)
    LayoutModule,

    // Displays Loading Bar when a Route Request or HTTP Request is pending
    PendingInterceptorModule,

    // Register a Service Worker (optional)
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

		kwNgMod,
		kwNgViewMod,
		kwBSModG.forRoot(),

		dlStateMod,
		dwCoreMod,
		dwCompMod,
		dwPageMod,

		//!!! Order is so important for Routing to work
		RoutingModule,
		//!! This must come after the modules defining the routes

		EventsModule.forRoot()

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      } as MatSnackBarConfig
    },
    		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		}
	]
})
export class AppModule
{

	constructor(injector: Injector)
	{
	    setAppInjector(injector);
		//console.log('appModule::constructor() called.');

	}
}
