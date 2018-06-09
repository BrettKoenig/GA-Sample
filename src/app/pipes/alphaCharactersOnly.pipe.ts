import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alphaCharactersOnly'
})
export class AlphaCharactersOnlyPipe implements PipeTransform {

    transform(value: string, useAbbreviation?: boolean): string {
        var returnValue = value.replace(/[^a-zA-Z]/gi, '');

        return useAbbreviation ? returnValue.substring(0, 2).toUpperCase() : returnValue;
    }
}