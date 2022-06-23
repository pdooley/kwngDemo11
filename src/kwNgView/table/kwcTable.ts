/**********************************************************************
 *
 * kwNgComp/tbl/kwcTbl.ts
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
import {Component} from '@angular/core';
//import { AfterViewInit }        from '@angular/core';
//import { OnDestroy }            from '@angular/core';
//import { OnInit }               from '@angular/core';
//import { ViewChild }            from '@angular/core';

import {MatPaginator} from '@angular/material';
import {MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {filter} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import {fadeOutAnimation} from "@appCore/common/route.animation";
import {ListColumn} from "@appCore/common/list/list-column.model";

import {kw} from "@kw/kw";
import {kwcCreate} from './create/kwcCreate';
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";

import {Customer} from './create/customer.model';


const sTAG: string = "table";
const sCOLS: string = "cols";
const sIS_VISIBLE: string = "bIsVisible";
const sPROPERTY: string = "property";


@Component({
    selector: 'kwc-table',
    templateUrl: './kwcTable.html',
    styleUrls: ['./kwcTable.scss'],
    animations: [fadeOutAnimation],
    host: {'[@fadeOutAnimation]': 'true'}
})
export class kwcTable extends kwNgCtrlCompId
{

    subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
    data$: Observable<Customer[]> = this.subject$.asObservable();
    customers: Customer[];

    pageSize = 10;
    dataSource: MatTableDataSource<Customer> | null;

//	@ViewChild(MatPaginator) paginator: MatPaginator;
//	@ViewChild(MatSort) sort: MatSort;

    columns: object[];

    constructor()
    {
        super(sTAG);
        //console.log(this.sClass, "::constructor() called.");
    }

//@formatter:on

    protected initCmp(): void {
        //console.log(this.sClass, "::parseView() called.");
    }

    protected parseData(data: any): void {
        //console.log(this.sClass, "::parseData() called.");
    }

    protected parseInits(inits: object): void {
        //console.log(this.sClass, "::parseInits() called.");
    }

    protected parseView(view: object): void {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

    }

    /*	ngOnInit() {

            super.ngOnInit();

            //console.log('kwcTable::ngOnInit() called.');


            if (kw.isNull(this.view))
            {
                //console.log('kwcTable::ngOnInit() view is invalid.');
                return;
            }


            const cols = this.view[sCOLS];
            if (kw.isNull(cols))
            {
                //console.log('kwcTable::ngOnInit() cols is invalid.');
                return;
            }
            //console.log('kwcTable::ngOnInit() cols is [', cols, '].');
            this.columns = cols;


            if (kw.isNull(this.result))
            {
                //console.log('kwcTable::ngOnInit() result is invalid.');
                return;
            }
            //console.log('kwcTable::ngOnInit() result is [', this.result, '].');


            this.getData().subscribe(customers => {
                this.subject$.next(customers);
            });

            this.dataSource = new MatTableDataSource();

            this.data$.pipe(
                filter(Boolean)
            ).subscribe((customers) => {
                this.customers = customers;
                this.dataSource.data = customers;
            });
        }

        ngOnDestroy()
        {
            //console.log('kwcTable::ngOnDestroy() called.');
        }

        ngAfterViewInit()
        {
            //console.log('kwcTable::ngAfterViewInit() called.');

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }

        get visibleColumns()
        {
            //console.log('kwcTable::get visibleColumns() called.');

            return this.columns.filter(column => column[sIS_VISIBLE]).map(column => column[sPROPERTY]);
        }

        getData()
        {
            //console.log('kwcTable::getData() called.');

            //return of(DATA.map(customer => new Customer(customer)));
            return this.result;
        }

        deleteCustomer(customer)
        {
            //console.log('kwcTable::deleteCustomer() called.');

            this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
            this.subject$.next(this.customers);
        }

        onFilterChange(value)
        {
            //console.log('kwcTable::onFilterChange() called.');
            if (!this.dataSource) {
                return;
            }
            value = value.trim();
            value = value.toLowerCase();
            this.dataSource.filter = value;
        }

    */
}
