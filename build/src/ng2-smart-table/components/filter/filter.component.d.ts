import { ViewContainerRef } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
export declare class FilterComponent {
    column: Column;
    source: DataSource;
    inputClass: string;
    protected filterCell: ViewContainerRef;
    query: string;
    timeout: any;
    delay: number;
    ngAfterViewInit(): void;
    externalFilter(event: any): void;
    filter(event: any): boolean;
    protected addFilter(): void;
}
