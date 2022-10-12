import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Employees:Employee[], searchValue: string): Employee {
    if(!Employees || ! searchValue){
      return null;
    }
    }

}
