import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform{

    transform(valor: number): string {
        
        if (valor === 0) {
            return 'rojo';
        } else if(valor === 1){
            return 'negro';
        } else if (valor === 2){
            return 'azul';
        } else if (valor === 3){
            return 'verde';
        }
        return "true";
    }

}