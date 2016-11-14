import { Component, ViewChild , AfterViewInit} from '@angular/core';
import { CustomServerDataSource } from './serve.data-source';
import { Http } from '@angular/http';
import {CustomServerDataSourceCRM} from "./serve.data-source-crm";
import {Ng2SmartTableComponent} from "../../../../../../src/ng2-smart-table/ng2-smart-table.component";

@Component({
  selector: 'basic-example-data',
  styles: [],
  providers: [CustomServerDataSourceCRM],
  template: `
    <ng2-smart-table #table (delete)="onDelete($event)" (edit)="onEdit($event)" (create)="onCreate($event)" [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent implements AfterViewInit{
  ngAfterViewInit():void {
    console.log(this.table);
  }
  @ViewChild('table')
  table: any;

  onDelete(event):void{
    console.log("onDelete",this.table, event);
  }
  onEdit(event):void{
    console.log("onEdit",this.table, event);
  }
  onCreate(event):void{
    console.log("onCreate",this.table, event);
  }


  settings = {
    mode:'external',
    columns: {
      username: {
        title: 'Username',
        hideable: false
      },
      first_name: {
        title: 'First Name'
      },
      last_name: {
        title: 'Last Name'
      },
      created_at: {
        title: 'Created',
        type: 'date',
        editable: false
      }
    }
  };

  constructor(protected source: CustomServerDataSourceCRM) {
  }
}
