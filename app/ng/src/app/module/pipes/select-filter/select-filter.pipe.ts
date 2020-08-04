import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

    public transform(options: any, searchText: any, stringName: string = 'name'): unknown {
        if (options.length === 0 && !searchText) {
            return options;
        } else {
            let count = searchText.length;
            return options.filter(option => option[stringName].toLowerCase().slice(0, count) === searchText.toLowerCase());
        }
    }
}
