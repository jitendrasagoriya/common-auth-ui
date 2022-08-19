import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time24to12Format'
})
export class Time24to12FormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {     
    let hour = (value.split(':'))[0]
    let min = (value.split(':'))[1]
    let part = hour > 12 ? 'pm' : 'am';
    if(parseInt(hour) == 0)
     hour = 12;
    min = (min+'').length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour+'').length == 1 ? `0${hour}` : hour;
    return `${hour}:${min} ${part}`
    
  }

}