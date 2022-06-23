/**********************************************************************
 *
 * kw/class/mode/kwModeFcty.ts
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
import {kwMode }               from "./kwMode";
import {kwModeDebug }          from "./kwModeDebug";
import {kwModeEnum }            from "./kwModeEnum";
import {kwModeLive }           from "./kwModeLive";
import {kwModeSrvc }           from "./kwModeSrvc";
//@formatter:on


const sTAG: string = "sMode";

export class kwModeFcty
{
    static create(info: object): kwMode
    {
        //console.log("kwMode::create() called");

        if (kw.isNull(info))
        {
            console.error("kwMode::create() info is invalid");
            return;
        }
        //console.info("kwMode::create() info is ", info);

        const sMode: string = info[sTAG];
        if (!kw.isString(sMode))
        {
            console.error("kwMode()::create() sMode is invalid.");
            return;
        }
        //console.info("kwMode()::create() sMode is ", sMode);

        const nMode: kwModeEnum = kwModeSrvc.toEnum(sMode);
        if (!kwModeSrvc.in(nMode))
        {
            console.error("kwMode()::create() nMode is invalid.");
            return;
        }

        let mode: kwMode;

        switch (nMode)
        {
            case kwModeEnum.debug:
            {
                mode = new kwModeDebug();
                break;
            }

            case kwModeEnum.live:
            {
                mode = new kwModeLive();
                break;
            }

            default:
            {
                console.error("kwMode()::create() nMode is invalid.");
                return;
            }
        }

        if (!kwMode.is(mode))
        {
            console.error("kwMode()::create() error creating mode.");
            return;
        }

        if (!mode.init())
        {
            console.error("kwMode()::create() error initializing mode.");
            return;
        }
        //console.info("kwMode()::create() mode is ", mode);

        return mode;
    }
}

