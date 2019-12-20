import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBase64'
})
export class ToBase64Pipe implements PipeTransform {
  s: String;
  transform(value: any, ...args: any[]): any {
    this.s = "";
    for (let byte of value) {
      this.s += String.fromCharCode(byte);
      
    }
    return this.s;
  }

}
