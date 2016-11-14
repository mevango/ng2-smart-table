import 'bootstrap-daterangepicker/daterangepicker.js';
import { AfterViewInit } from '@angular/core';
import { FilterComponent } from "../filter.component";
export declare class MgoDateRangeFilter implements AfterViewInit {
    filter: FilterComponent;
    private _dateError;
    datepicker: any;
    private idDatePicker;
    constructor();
    onChange(): void;
    onTouched: () => void;
    ngAfterViewInit(): void;
    private init();
}
