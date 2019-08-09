import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any): any {

    if(value==='undefined'){
      return 'assets/img/noimage.png';
    }else{
      return value;
    }
  }

}