import { Component, Input, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';

@Component({
  selector: 'ng2-smart-table-filter',
  styles: [require('./filter.scss')],
  template: `
    <div #filterCell class="ng2-smart-filter" *ngIf="column.isFilterable">
      <input *ngIf="!column.getFilterModule()"
      [(ngModel)]="query"
      (keyup)="filter($event)"
      [ngClass]="inputClass"
      class="form-control"
      type="text" 
      placeholder="{{ column.title }}" />
    </div>
  `
})
export class FilterComponent {

  @Input() column: Column;
  @Input() source: DataSource;
  @Input() inputClass: string = '';

  @ViewChild('filterCell', {read: ViewContainerRef})
  protected filterCell: ViewContainerRef;

  query: string = '';
  timeout: any;
  delay: number = 300;

  ngAfterViewInit(): void {
    if(this.column.getFilterModule()){
      console.log(this.column.getFilterModule(), this.column);
      this.column.getFilterModule().attachFilter(this.filterCell,this.externalFilter.bind(this))
    }
    this.source.onChanged().subscribe((elements) => {
      let filterConf = this.source.getFilter();
      if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
        this.query = '';
      }
    });
  }

  externalFilter(event){
    console.log(event);
    this.source.addFilter({
      field: this.column.id,
      search: event.value,
      filter: this.column.getFilterFunction()
    });
  }

  filter(event): boolean {
    if (event.which === 13) {
      this.addFilter();
      // ignore tab component
    } else if(event.which !== 9) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.addFilter();
      }, this.delay);
    }
    return false;
  }

  protected addFilter(): void {
    this.source.addFilter({
      field: this.column.id,
      search: this.query,
      filter: this.column.getFilterFunction()
    });
  }
}
