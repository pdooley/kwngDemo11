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
import {OnDestroy} from '@angular/core';
import {OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlPageMsg} from '@kwNgClass/kwNgCtrlPageMsg';
import {kwNgStDataList} from "@kwNgClass/kwNgStDataList";
import {kwNgStDataVal} from "@kwNgClass/kwNgStDataVal";
import {kwNgStMsg} from "@kwNgClass/kwNgStMsg";
import {kwStMsgFcty} from "@kwState/kwStMsgFcty";


export abstract class kwNgCtrlPageMsgSt extends kwNgCtrlPageMsg
                                        implements OnDestroy, OnInit
{

    private subSt: Subscription;

    private bLoadPageFltr = false;


    constructor(
        srvcInit:   kwNgStDataVal,
        srvcView:   kwNgStDataVal,
        srvcData:   kwNgStDataList,
        srvcFcty:   kwStMsgFcty,
        srvcMsg:    kwNgStMsg,
        private srvcQry:    kwNgStDataList      )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg     );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.retrieveDataFltr();

        super.ngOnInit();
    }

    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        if (!kw.isNull(this.subSt)) {
            this.subSt.unsubscribe();
        }

        super.ngOnDestroy();
    }


    retrieveDataFltr(): void
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveDataFltr");
        //console.log(log.called());

        if (kw.isNull(this.srvcQry))
        {
            console.error(log.invalid("srvcQry"));
            return;
        }

        const data = this.srvcQry.get();
        if (kw.isValid(data))
        {
            //console.info(log.isObj("dataFltr"), data , "]");
            this.storeFltrData(data);
           return;
        }
        //console.info(log.empty("dataFltr"));

        const sMsg = "!!!!DEPENDANCY WARNING!!!! - fltr is not loaded."
            + "You may wait a long time "
            + "until somebody decides to retrieve it for you.";
        //console.log(log.info(sMsg));
        console.warn(log.info(sMsg));
        console.error(log.info(sMsg));

        this.subSt = (<kwNgStDataList>this.srvcQry).changed$.subscribe(fltr => {
            this.storeFltr(fltr);
        });

    }

}
