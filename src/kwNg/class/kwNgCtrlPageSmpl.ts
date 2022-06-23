/**********************************************************************
 *
 * kwNg/class/kwNgCtrlPageSmpl.ts
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
import { OnChanges }            from '@angular/core';
import { SimpleChanges }        from '@angular/core';
import { Router }               from '@angular/router';

import { kw }                   from "@kw/kw";
import { kwBSAttrsVal }         from "@kwNgBS/attrs/kwBSAttrsVal";
import { kwBSDispVal }          from "@kwNgBS/disp/kwBSDispVal";
import { kwBSFltrVal }          from "@kwNgBS/fltr/kwBSFltrVal";
import { kwBSRsltVal }          from "@kwNgBS/rslt/kwBSRsltVal";
import { kwLog}                 from "@kw/kwLog";
import { kwCtrlPageSmpl }       from '@kwCtrl/kwCtrlPageSmpl';
import { kwNgStDataVal }        from '@kwNgClass/kwNgStDataVal';

import { AppInjector }          from '@app/appInjector';



export abstract class kwNgCtrlPageSmpl  extends kwCtrlPageSmpl
                                        implements OnChanges
{

     router;

    constructor(
        srvcInit: kwNgStDataVal,
        srvcView: kwNgStDataVal    )
    {
        super(
            srvcInit,
            srvcView   );

        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

//@formatter:on

     ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

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

        //calling base class init();
        this.init();
    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
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
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    ngOnChanges(changes: SimpleChanges)
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        if (kw.isNull(changes))
        {
            console.error(this.sClass, "::ngOnChanges() changes is invalid");
            return;
        }

    }

}
