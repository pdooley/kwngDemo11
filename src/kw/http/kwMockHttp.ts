/**********************************************************************
 *
 * kwNg/http/mock/kwMockHttp.ts
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
import { Component }				from '@angular/core';
//@formatter:on


@Component({
	selector: 'kw-mock-http',
	template: ``,
})
export class kwMockHttp
{

/*	constructor()
	{
		//console.log("kwApisHttp::constructor() called");
	}

	static get(sURL: string)
	{
		//console.log("kwMockHttp::get() called.");

		sURL = kw.isString(sURL) ? sURL : "";
		if ( sURL.length === 0 )
		{
			console.error("kwMockHttp::get() sURL is invalid.");
			return;
		}

		const deferred = $q.defer();

		$http.get(sURL)
			.success(function(data, status, headers, config)
			{
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config)
			{
				console.error("kwMockHttp::get::error() called.");
			});

		return deferred.promise;
	}
*/
}
