/**********************************************************************
 *
 * app/class/emails/itkEmailsFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import { kw }                   from "../../../kw/kw";

import { itkEmailType }         from "../email/itkEmailType";
import { itkEmail }             from "../email/itkEmail";
import { itkEmailsType }        from "./itkEmailsType";
// @formatter:on


const sTAG: string = "emails";


export class itkEmailsFcty
{

	static create(type: itkEmailsType): itkEmail[]
	{
		//console.log("itkEmailsSrvc::init() is called.");

		if(kw.isNull(type))
		{
			console.error("itkEmailsSrvc::create() type is invalid.");
			return;
		}
		//console.info("itkEmailsSrvc::create() type is ", type);

		let list: itkEmailType[] = type[sTAG];
		if (!kw.isArray(list))
		{
			console.error("itkEmail::init() list is invalid.");
			return;
		}
		//console.info("itkEmail::init() list is ", list);


		let items: itkEmail[];

		for (let i=0; i< list.length; i++)
		{
			let type: itkEmailType = list[i];
			if(kw.isNull(type))
			{
				console.error("itkEmailsSrvc::create() type is invalid.");
				return;
			}
			//console.info("itkEmailsSrvc::init() create creating emails.");

			let item: itkEmail = new itkEmail(type);
			if (!item.init())
			{
				console.error("itkEmailsSrvc::create() error creating item.");
				return;
			}
			items.push(item)
		}

		return items;
	}

}

