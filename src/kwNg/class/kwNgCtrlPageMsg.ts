/**********************************************************************
 *
 * kwNg/class/kwNgCtrlPageMsg.ts
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
import { AfterViewInit }        from '@angular/core';
import { OnDestroy }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { Subscription }         from 'rxjs/Subscription';

import { kw }                   from "@kw/kw";
import { kwBSAttrsVal }         from "@kwNgBS/attrs/kwBSAttrsVal";
import { kwBSDispVal }          from "@kwNgBS/disp/kwBSDispVal";
import { kwBSFltrVal }          from "@kwNgBS/fltr/kwBSFltrVal";
import { kwBSRsltVal }          from "@kwNgBS/rslt/kwBSRsltVal";
import { kwLog }                from "@kw/kwLog";
import { kwMsg }                from "@kwClass/msg/kwMsg";
import { kwCtrlPageMsg }        from '@kwCtrl/kwCtrlPageMsg';
import { kwNgStDataList }       from "@kwNgClass/kwNgStDataList";
import { kwNgStDataVal }        from "@kwNgClass/kwNgStDataVal";
import { kwNgStMsg }            from "@kwNgClass/kwNgStMsg";
import { kwStMsgFcty }          from "@kwState/kwStMsgFcty";

import { AppInjector }          from '@app/appInjector';


export abstract class kwNgCtrlPageMsg   extends kwCtrlPageMsg
                                        implements AfterViewInit, OnDestroy, OnInit
{
    private sub: Subscription;

    protected constructor(
        srvcInit:           kwNgStDataVal,
        srvcView:           kwNgStDataVal,
        srvcData:           kwNgStDataList,
        private srvcFcty:   kwStMsgFcty,
        private srvcMsg:    kwNgStMsg )
    {
        super(
            srvcInit,
            srvcView,
            srvcData );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        if (kw.isNull(this.srvcData))
        {
            console.error(log.invalid("srvcData"));
            return;
        }

        if (kw.isNull(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return;
        }

        if (kw.isNull(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return;
        }

        this.srvcAttrs = AppInjector.get(kwBSAttrsVal);
        if (kw.isNull(this.srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return;
        }

        this.srvcDisp = AppInjector.get(kwBSDispVal);
        if (kw.isNull(this.srvcDisp))
        {
            console.error(log.invalid("srvcDisp"));
            return;
        }

        this.srvcFltr = AppInjector.get(kwBSFltrVal);
        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return;
        }

        this.srvcRslt = AppInjector.get(kwBSRsltVal);
        if (kw.isNull(this.srvcRslt))
        {
            console.error(log.invalid("srvcRslt"));
            return;
        }

        this.sub = (<kwNgStDataList>this.srvcData).changed$.subscribe(data =>
        {
            //console.log(log.is("data", data));
            this.updateElmt(data);
        });

        //calling base class init();
        this.init();
    }

    ngAfterViewInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngAfterViewInit");
        //console.log(log.called());
    }

    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        if (!kw.isNull(this.sub))
        {
            this.sub.unsubscribe();
        }

    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

    protected loadPageData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadPageData");
        //console.log(log.called());

        if (kw.isNull(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }

        if (kw.isNull(this.srvcData))
        {
            console.error(log.invalid("srvcData"));
            return false;
        }

        if (kw.isNull(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return false;
        }

        const fltrVal = this.fltrVal;
        if (!kw.isValid(fltrVal))
        {
            //console.info(log.info("fltrVal not set yet"));
            return false;
        }
        //console.info(log.is("fltrVal", fltrVal));

        const msg: kwMsg = this.srvcFcty.get([fltrVal]);
        if (!kw.isValid(msg))
        {
            console.error(log.errCreate("msg"));
            return false;
        }
        //console.info(log.is("msg", msg));

        this.srvcMsg.change(msg);

        return true;
    }



}
