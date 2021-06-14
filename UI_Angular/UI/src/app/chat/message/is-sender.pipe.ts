import { Pipe, PipeTransform } from '@angular/core';
import { MessageSourceType } from './message.component';

@Pipe({
    name: 'isSender'
})
export class IsSenderPipe implements PipeTransform {

    transform(type: MessageSourceType): boolean {
        return type === MessageSourceType.Sender;
    }
}