import { Component } from '@angular/core';
import { CustomServerDataSource } from './serve.data-source';
import { Http } from '@angular/http';
import {CustomServerDataSourceCRM} from "./serve.data-source-crm";

@Component({
  selector: 'basic-example-data',
  styles: [],
  providers: [CustomServerDataSourceCRM],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings = {
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
        type: 'date'
      }
    }
  };

  constructor(protected source: CustomServerDataSourceCRM) {
  }
}
