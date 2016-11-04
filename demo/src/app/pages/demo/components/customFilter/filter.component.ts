import { ViewContainerRef } from '@angular/core';
import {ICustomFilter} from "../../../../../../../src/ng2-smart-table/components/filter/ICustomFilter";

export class DateFilterComponent implements ICustomFilter{
  attachFilter = function(filterCell:ViewContainerRef, onFilter:Function){
    console.log(filterCell);
    setTimeout(function(){
      onFilter({value:"92c952",type:"like"});
    },5000)
  };


}
