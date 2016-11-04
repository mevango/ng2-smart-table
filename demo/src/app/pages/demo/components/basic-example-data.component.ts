import { Component , NgModule , ComponentFactoryResolver } from '@angular/core';
import { CustomServerDataSource } from './serve.data-source';
import { Http } from '@angular/http';
import {DateFilterComponent} from "./customFilter/filter.component";
import { NouisliderModule } from 'ng2-nouislider';


@Component({
  selector: 'basic-example-data',
  styles: [],
  providers: [CustomServerDataSource],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {
  filter:DateFilterComponent = new DateFilterComponent();

  settings = {
    columns: {
      id: {
        title: 'ID',
        hideable: false
      },
      albumId: {
        title: 'Album'
      },
      title: {
        title: 'Title'
      },
      url: {
        title: 'Url',
        filterModule: this.filter
      }
    }
  };

  constructor(protected source: CustomServerDataSource, private componentFactoryResolver: ComponentFactoryResolver) {
    console.log(this.filter);
  }
}
