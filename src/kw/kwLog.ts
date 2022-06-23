/**********************************************************************
 *
 * kw/class/kwLog.ts
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

//@formatter:on

export class kwLog
{
    private sHdr: string;

    constructor(
        private sClass: string,
        private sMethod: string )
    {
        this.sHdr = sClass + "::" + sMethod + "() ";
    }

    public called(): string
    {
        return this.sHdr + "called";
    }

    public empty(sName: string)
    {
        return this.sHdr + "[" + sName + "] is empty";
    }

    public errCreate(sName: string)
    {
        return this.sHdr + "Error creating [" + sName + "]";
    }

    public errLoad(sName: string)
    {
        return this.sHdr + "Error loading [" + sName + "]";
    }

    public failLoad(sVal: string): string
    {
        return this.sHdr + "Failed loading [" + sVal + "]";
    }

    public info(sInfo: string)
    {
        return this.sHdr + sInfo;
    }

    public is(sName: string, val: any): string
    {
        return this.sHdr + sName + " is [" + val + "]";
    }

    public isObj(sName: string): string
    {
        return this.sHdr + "The object [" + sName + "] is [" ;
    }

    public invalid(sName: string): string
    {
        return this.is(sName, "invalid");
    }

    public recognizes(sVal: string): string
    {
        return this.sHdr + "Recognizes only [" + sVal + "]";
    }

    public requires(sVal: string): string
    {
        return this.sHdr + "Absolutely requires [" + sVal + "]";
    }

    public successLoad(sVal: string): string
    {
        return this.sHdr + "Success loading [" + sVal + "]";
    }

}

/*
static annotateName(target, name, desc)
{
    var method = desc.value;
    desc.value = function ()
    {
        var prevMethod = this.currentMethod;
        this.currentMethod = name;
        method.apply(this, arguments);
        this.currentMethod = prevMethod;
    }
}

*/
