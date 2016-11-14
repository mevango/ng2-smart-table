"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var jQuery = require('jquery/dist/jquery');
require('bootstrap-daterangepicker/daterangepicker.js');
var core_2 = require('@angular/core');
var filter_component_1 = require("../filter.component");
var MgoDateRangeFilter = (function () {
    function MgoDateRangeFilter() {
        this._dateError = null;
        this.idDatePicker = uniqueId('q-datepicker_');
        this.onTouched = function () {
        };
        //console.log("checking dependencies", jQuery, moment)
    }
    MgoDateRangeFilter.prototype.onChange = function () {
        this._dateError = null;
        console.log("filter daterange");
    };
    MgoDateRangeFilter.prototype.ngAfterViewInit = function () {
        this.init();
    };
    MgoDateRangeFilter.prototype.init = function () {
        var self = this;
        this.datepicker = jQuery('#' + this.idDatePicker).daterangepicker({
            autoUpdateInput: false,
            showDropdowns: true,
            locale: {
                format: "MM/DD/YYYY",
                cancelLabel: 'Clear'
            }
        });
        jQuery('#' + this.idDatePicker).on('apply.daterangepicker', function (ev, picker) {
            jQuery(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
            console.log(self.filter.column, picker.startDate);
            self.filter.source.addFilter({
                field: self.filter.column.id,
                search: picker.startDate.format('x'),
                type: "gt",
                filter: self.filter.column.getFilterFunction()
            });
            self.filter.source.addFilter({
                field: self.filter.column.id,
                search: picker.endDate.format('x'),
                type: "lt",
                filter: self.filter.column.getFilterFunction()
            });
        });
        jQuery('#' + this.idDatePicker).on('cancel.daterangepicker', function (ev, picker) {
            jQuery(this).val('');
        });
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', filter_component_1.FilterComponent)
    ], MgoDateRangeFilter.prototype, "filter", void 0);
    __decorate([
        core_2.HostListener('dateChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MgoDateRangeFilter.prototype, "onChange", null);
    MgoDateRangeFilter = __decorate([
        core_2.Component({
            selector: 'mgo-date-range-filter',
            encapsulation: core_1.ViewEncapsulation.None,
            template: require('./mgo-date-range-filter.html'),
            styles: [require('./mgo-date-range-filter.scss')],
        }), 
        __metadata('design:paramtypes', [])
    ], MgoDateRangeFilter);
    return MgoDateRangeFilter;
}());
exports.MgoDateRangeFilter = MgoDateRangeFilter;
var id = 0;
function uniqueId(prefix) {
    return prefix + ++id;
}
function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}
