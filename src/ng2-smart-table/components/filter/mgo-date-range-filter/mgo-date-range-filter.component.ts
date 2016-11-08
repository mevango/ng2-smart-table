import {ViewEncapsulation} from '@angular/core';

import * as jQuery from 'jquery/dist/jquery';
import 'bootstrap-daterangepicker/daterangepicker.js';
import * as moment from 'moment/moment';
import {
    Component, Input, EventEmitter, HostListener, AfterViewInit,
    SimpleChanges
} from '@angular/core';
import {FilterComponent} from "../filter.component";

@Component({
    selector: 'mgo-date-range-filter',
    encapsulation: ViewEncapsulation.None,
    template: require('./mgo-date-range-filter.html'),
    styles: [require('./mgo-date-range-filter.scss')],
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
        this.init();
    }


    private init():void {
        var self = this;
        this.datepicker = (<any>jQuery('#' + this.idDatePicker)).daterangepicker({
            autoUpdateInput: false,
            showDropdowns: true,
            locale: {
                format: "MM/DD/YYYY",
                cancelLabel: 'Clear'
            }
        });

        jQuery('#' + this.idDatePicker).on('apply.daterangepicker', function(ev, picker) {
            jQuery(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        jQuery('#' + this.idDatePicker).on('cancel.daterangepicker', function(ev, picker) {
            jQuery(this).val('');
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


