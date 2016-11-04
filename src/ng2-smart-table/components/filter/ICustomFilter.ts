import { ViewContainerRef } from '@angular/core';

export interface ICustomFilter {
    attachFilter: (filterCell:ViewContainerRef, onFilter:Function) => void;
}
