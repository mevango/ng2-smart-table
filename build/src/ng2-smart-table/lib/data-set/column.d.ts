import { DataSet } from './data-set';
export declare class Column {
    id: string;
    protected settings: any;
    protected dataSet: DataSet;
    title: string;
    type: string;
    visible: boolean;
    class: string;
    isSortable: boolean;
    isEditable: boolean;
    isFilterable: boolean;
    isHideable: boolean;
    sortDirection: string;
    defaultSortDirection: string;
    protected compareFunction: Function;
    protected valuePrepareFunction: Function;
    protected filterFunction: Function;
    protected filterModule: any;
    constructor(id: string, settings: any, dataSet: DataSet);
    getCompareFunction(): Function;
    getValuePrepareFunction(): Function;
    getFilterFunction(): Function;
    getFilterModule(): any;
    protected process(): void;
    protected prepareType(): string;
    protected prepareSortDirection(): string;
    protected determineType(): string;
}
