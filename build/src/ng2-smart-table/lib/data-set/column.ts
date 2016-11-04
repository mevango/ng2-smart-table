import { DataSet } from './data-set';
import {FilterComponent} from "../../components/filter/filter.component";
import {ICustomFilter} from "../../components/filter/ICustomFilter";

export class Column {

  public title: string = '';
  public type: string = '';
  public visible: boolean = true;
  public class: string = '';
  public isSortable: boolean = false;
  public isEditable: boolean = true;
  public isFilterable: boolean = false;
  public isHideable: boolean = true;
  public sortDirection: string = '';
  public defaultSortDirection: string = '';
  protected compareFunction: Function;
  protected valuePrepareFunction: Function;
  protected filterFunction: Function;
  protected filterModule : ICustomFilter;

  constructor(public id: string, protected settings: any, protected dataSet: DataSet) {
    this.process();
  }

  public getCompareFunction(): Function {
    return this.compareFunction;
  }

  public getValuePrepareFunction(): Function {
    return this.valuePrepareFunction;
  }

  public getFilterFunction(): Function {
    return this.filterFunction;
  }
  public getFilterModule(): ICustomFilter {
    return this.filterModule;
  }

  protected process(): void {
    this.title = this.settings['title'];
    this.class = this.settings['class'];
    this.type = this.prepareType();

    this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
    this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
    this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
    this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
    this.isHideable = typeof this.settings['hideable'] === 'undefined' ? true : !!this.settings['hideable'];
    this.filterModule = this.settings['filterModule'];
    this.sortDirection = this.prepareSortDirection();

    this.compareFunction = this.settings['compareFunction'];
    this.valuePrepareFunction = this.settings['valuePrepareFunction'];
    this.filterFunction = this.settings['filterFunction'];
  }

  protected prepareType(): string {
    return this.settings['type'] || this.determineType();
  }

  protected prepareSortDirection(): string {
    return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
  }

  protected determineType(): string {
    // TODO: determine type by data
    return 'string';
  }
}
