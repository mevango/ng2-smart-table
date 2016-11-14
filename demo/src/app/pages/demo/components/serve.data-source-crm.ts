import { LocalDataSource } from '../../../../../../src/ng2-smart-table/lib';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomServerDataSourceCRM extends LocalDataSource {

  lastRequestCount: number = 0;

  constructor(protected http: Http) {
    super();
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {
    let url = 'http://localhost:1338/api/crm/v1/users?';

    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        url += `sort_n=${fieldConf.field}&sort_t=${fieldConf.direction.toUpperCase()}&`;
      });
    }

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      url += `page=${this.pagingConf['page']}&number=${this.pagingConf['perPage']}&`;
    }

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf) => {
        if (fieldConf['search']) {
          url += `${fieldConf['field']}_${fieldConf['type']?fieldConf['type']:'like'}=${fieldConf['search']}&`;
        }
      });
    }

    return this.http.get(url,{
      withCredentials: true
      }).map(res => {
      this.lastRequestCount = parseInt(res.headers.get('X-Total-Count'));
      console.log(this.lastRequestCount, res);
      return res.json();
    }).toPromise();
  }
}