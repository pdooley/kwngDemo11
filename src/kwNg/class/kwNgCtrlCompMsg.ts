/**********************************************************************
 *
 * kwNg/class/comp/kwNgCtrlComp.ts
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
import { EventEmitter }         from '@angular/core';
import { Input }                from '@angular/core';
import { OnChanges }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { Output }               from '@angular/core';
import { Router }               from "@angular/router";
import { SimpleChange }         from '@angular/core';
import { SimpleChanges }        from '@angular/core';
import { Subscription }         from 'rxjs/Subscription';

import { AppInjector }          from '@app/appInjector';

import { kw }                   from "@kw/kw";
import { kwBSAttrsVal }         from "@kwNgBS/attrs/kwBSAttrsVal";
import { kwBSDispVal }          from "@kwNgBS/disp/kwBSDispVal";
import { kwBSFltrVal }          from "@kwNgBS/fltr/kwBSFltrVal";
import { kwBSRsltVal }          from "@kwNgBS/rslt/kwBSRsltVal";
import { kwCtrlCompMsg }        from "@kwCtrl/kwCtrlCompMsg";
import { kwLog }                from "@kw/kwLog";
import { kwMsg }                from "@kwClass/msg/kwMsg";
import { kwNgStDataList }       from "@kwNgClass/kwNgStDataList";
import { kwNgStMsg }            from "./kwNgStMsg";
import { kwStMsgFcty }          from "@kwState/kwStMsgFcty";


export abstract class kwNgCtrlCompMsg   extends kwCtrlCompMsg
                                        implements OnInit, OnChanges
{
    @Input() dataIn: any;
    @Input() fltrIn: any;
    @Input() initsIn: any;
    @Input() viewIn: any;

    @Output() changed: EventEmitter<any> = new EventEmitter();

    sub: Subscription;
    router;


    protected constructor(
        sTag:               string = "",
        srvcData:           kwNgStDataList,
        private srvcFcty:   kwStMsgFcty,
        private srvcMsg:    kwNgStMsg    )
    {
        super(
            sTag,
            srvcData    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected getDataIn(): any { return this.dataIn; }

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        console.log(log.called());

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
        console.info(log.isObj("srvcDisp"),  this.srvcDisp, "]");

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

        this.init();
    }

    ngOnChanges(changes: SimpleChanges)
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnChanges");
        console.log(log.called());

        if (kw.isNull(changes))
        {
            console.error(this.sClass, "::ngOnChanges() changes is invalid");
            return;
        }

        const dataIn: SimpleChange = changes.dataIn;
        if (kw.isValid(dataIn))
        {
            this.processDataIn(dataIn);
        }

        const fltrIn: SimpleChange = changes.fltrIn;
        if (kw.isValid(fltrIn))
        {
            this.processFltrIn(fltrIn);
        }

        const initsIn: SimpleChange = changes.initsIn;
        if (kw.isValid(initsIn))
        {
            this.processInitsIn(initsIn);
        }

        const viewIn: SimpleChange = changes.viewIn;
        if (kw.isValid(viewIn))
        {
            this.processViewIn(viewIn);
        }

    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());

        if (kw.isNull(this.router))
        {
            this.router = AppInjector.get(Router);
        }

        if (!kw.isString(sLink))
        {
            console.error(this.sClass, "::navigate() sLink is invalid");
            return;
        }
        this.router.navigate([sLink]);
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

    processDataIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processDataIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processDataIn() change is [", change, "]");

        const dataIn = change.currentValue;
        //console.info(this.sClass, "::processDataIn() dataIn is [", dataIn, "]");

        this.storeData(dataIn);
    }

    processFltrIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processFltrIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processFltrIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processFltrIn() not initialized");
            return;
        }

        const fltrIn = change.currentValue;
        //console.info(this.sClass, "::processFltrIn() fltrIn is [", fltrIn, "]");

        this.storeFltr(fltrIn);

    }

    processInitsIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processInitsIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processInitsIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processInitsIn() not initialized");
            return;
        }

        const initsIn = change.currentValue;
        //console.info(this.sClass, "::processInitsIn() initsIn is [", initsIn, "]");

        this.storeInit(initsIn);

    }

    processViewIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processViewIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processViewIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processViewIn() not initialized");
            return;
        }

        const viewIn = change.currentValue;
        //console.info(this.sClass, "::processViewIn() viewIn is [", viewIn, "]");

        this.storeView(viewIn);
    }

    onChanged($event)
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());


        if (kw.isNull($event))
        {
            console.error(this.sClass, "::onChanged() $event is invalid");
            return;
        }
        //console.info(this.sClass, "::onChanged() $event is [", $event, "]");

        let event;

        if (kw.isString(this.sId))
        {
            //console.info(this.sClass, "::onChanged() sId is [", this.sId, "]");
            event = {
                sId: this.sId,
                event: $event
            };
        }
        else
        {
            event = $event;
        }

        //console.info(this.sClass, "::onChanged() event is [", event, "]");

        this.changed.emit(event);
    }

    protected request(): void
    {
        const log: kwLog = new kwLog(this.sClass, "request");
        //console.log(log.called());

        if (kw.isNull(this.srvcMsg))
        {
            console.error(this.sClass, "::request() no msg service available - not loading data.");
            return;
        }

        if (kw.isNull(this.srvcFcty))
        {
            console.error(this.sClass, "::request() srvcFcty is not set.");
            return;
        }

        let msg: kwMsg;

        const fltr = this.fltr;
        if (kw.isValid(fltr))
        {
            msg = this.srvcFcty.get([fltr]);
        }
        else
        {
            msg = this.srvcFcty.get([]);
        }

        this.srvcMsg.change(msg);
    }

    protected subscribe(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subscribe");
        //console.log(log.called());

        this.sub = (<kwNgStDataList>this.srvcData).changed$.subscribe(data =>
        {
            this.storeData(data);
        });

        this.storeData(this.srvcData.get());

    }

}
