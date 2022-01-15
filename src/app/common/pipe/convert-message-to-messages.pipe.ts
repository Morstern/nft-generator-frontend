import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMessageToMessages',
})
export class ConvertMessageToMessagesPipe implements PipeTransform {
  transform(message: any): Array<string> {
    if (typeof message === 'string') {
      return [message];
    } else {
      return message;
    }
  }
}

@NgModule({
  declarations: [ConvertMessageToMessagesPipe],
  exports: [ConvertMessageToMessagesPipe],
})
export class ConvertMessageModule {}
