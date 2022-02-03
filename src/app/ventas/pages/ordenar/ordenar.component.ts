import { Component, enableProdMode } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {


  nombre:string = "matias";

  enMayusculas: boolean = false;


  cambiarMinusculasYMayusculas() {

    if (this.enMayusculas === true){
      this.enMayusculas = false;
    } else {
      this.enMayusculas = true;
    }

  }



  //parte de tabla

  heroes: Heroe[] = [

    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },

    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },

    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },

    {
      nombre: 'Darevil',
      vuela: false,
      color: Color.rojo
    },

    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }


  ]


  parametroDeOrdenamiento: string = "";

  cambiarParametroDeOrdenamiento(parametro: string){
    this.parametroDeOrdenamiento = parametro;
    return this.parametroDeOrdenamiento;
  }
}
