import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shortText'
})
export class ShorTextPipe implements PipeTransform {
    transform(text: string, len: number, otroParametro): string {
        return text.length > len ? text.substr(0, len) + '...': text;
    }
}