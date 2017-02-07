import {ViewEncapsulation} from '@angular/core';

import 'bootstrap-daterangepicker/daterangepicker.js';
import * as moment from 'moment/moment';
import {
    Component, Input, EventEmitter, HostListener, AfterViewInit,
    SimpleChanges
} from '@angular/core';
import {FilterComponent} from "../filter.component";
declare var jQuery:any;
@Component({
    selector: 'mgo-date-range-filter',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './mgo-date-range-filter.html',
    styleUrls: ['mgo-date-range-filter.scss'],
})
export class MgoDateRangeFilter implements AfterViewInit {
    @Input()
    filter:FilterComponent;

    private _dateError : string = null;

    // instances
    datepicker:any;

    private idDatePicker:string = uniqueId('q-datepicker_');

    constructor() {
        //console.log("checking dependencies", jQuery, moment)
    }

    @HostListener('dateChange', ['$event'])
    onChange(){
        this._dateError = null;
        console.log("filter daterange");
    }
    onTouched = () => {
    };

    ngAfterViewInit() {
        setTimeout(this.init.bind(this),1);
    }


    private init():void {
        var self = this;
        this.datepicker = (<any>jQuery('#' + this.idDatePicker)).daterangepicker({
            autoUpdateInput: false,
            showDropdowns: true,
            locale: {
                format: "MM/DD/YYYY",
                cancelLabel: 'Clear'
            },
            opens: "left",
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        });

        jQuery('#' + this.idDatePicker).on('apply.daterangepicker', function(ev, picker) {
            jQuery(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
            console.log(self.filter.column, picker.startDate);
            self.filter.source.addFilter({
                field: self.filter.column.id,
                search: picker.startDate.format('x'),
                type: "gt", //gt,lt,like
                filter: self.filter.column.getFilterFunction()
            });
            self.filter.source.addFilter({
                field: self.filter.column.id,
                search: picker.endDate.format('x'),
                type: "lt", //gt,lt,like
                filter: self.filter.column.getFilterFunction()
            });
        });

        jQuery('#' + this.idDatePicker).on('cancel.daterangepicker', function(ev, picker) {
            jQuery(this).val('');
            self.filter.source.addFilter({
                field: self.filter.column.id,
                search: '',
                type: "gt", //gt,lt,like
                filter: self.filter.column.getFilterFunction()
            });
            self.filter.source.addFilter({
                field: self.filter.column.id,
                search: '',
                type: "lt", //gt,lt,like
                filter: self.filter.column.getFilterFunction()
            });
        });
    }



}

let id:number = 0;
function uniqueId(prefix:string):string {
    return prefix + ++id;
}

function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}


