/**********************************************************************
 *
 * kw/class/route/kwRouteFcty.ts
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
import {kw }                    from "@kw/kw";
import {kwRoute }              from "./kwRoute";
import {kwRouteDash }           from "./kwRouteDash";
import {kwRouteEnum }            from "./kwRouteEnum";
import {kwRouteLogin}         from "./kwRouteLogin";
import {kwRouteSrvc }          from "./kwRouteSrvc";
//@formatter:on


export class kwRouteFcty
{
    static create(sRoute: string): kwRoute
    {
        //console.log("kwRouteSrvc::loadAuthorization() called.");

        if (!kw.isString(sRoute) || sRoute.length === 0)
        {
            console.error("kwRouteSrvc::create() sRoute is invalid");
            return;
        }
        //console.info("kwRouteSrvc::create() sRoute is [", sRoute, "]");

        const nType = kwRouteSrvc.toEnum(sRoute);
        if (!kwRouteSrvc.in(nType))
        {
            console.error("kwRouteSrvc::create() [", sRoute, "] is invalid");
            return;
        }
        //console.info("kwRouteSrvc::create() nType is [", nType, "]");

        let route: kwRoute;

        switch ( nType )
        {
            case kwRouteEnum.login:
            {
                route = new kwRouteLogin();
                break;
            }

            case kwRouteEnum.dash:
            {
                route = new kwRouteDash();
                break;
            }

            default:
            {
                console.error("kwRouteSrvc::create() nType is invalid");
            }
        }

        if ( kw.isNull(route))
        {
            console.error("kwOptions::createRoute() route is not valid.");
            return;
        }

        if (!route.init())
        {
            console.error("kwOptions::createRoute() error initializing route.");
            return;
        }

        return route;
    }

}

