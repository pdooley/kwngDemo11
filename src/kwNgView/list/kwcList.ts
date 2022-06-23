/**********************************************************************
 *
 * kwNgComp/list/kwcList.ts
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
import {AfterViewInit} from '@angular/core';
import {Component} from '@angular/core';
import {ElementRef} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Input} from '@angular/core';
import {Output} from '@angular/core';
import {ViewChild} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators';

import {kwLog} from "@kw/kwLog";
import {kwcListCol} from './kwcListCol';

@Component({
    selector: 'kwc-list',
    templateUrl: './kwcList.html',
    styleUrls: ['./kwcList.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwcList implements AfterViewInit {

    @Input() name: string;
    @Input() columns: kwcListCol[];

    @ViewChild('filter') filter: ElementRef;
    @Output() filterChange = new EventEmitter<string>();

    @Input() hideHeader: boolean;

    constructor()
    {
    }

//@formatter:off

    ngAfterViewInit() {
        if (!this.hideHeader) {
            fromEvent(this.filter.nativeElement, 'keyup').pipe(
                distinctUntilChanged(),
                debounceTime(150)
            ).subscribe(() => {
                this.filterChange.emit(this.filter.nativeElement.value);
            });
        }
    }

    toggleColumnVisibility(column, event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        column.visible = !column.visible;
    }
}
