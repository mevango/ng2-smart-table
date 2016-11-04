import { ViewContainerRef } from '@angular/core';

export class DateFilterComponent {
  attachFilter = function(filterCell:ViewContainerRef, onFilter:Function){
    console.log(filterCell);
    setTimeout(function(){
      onFilter({value:"92c952",type:"like"});
    },5000)
  };


}
