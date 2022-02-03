import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Marcelo'];

clientesMap ={
  '=0' : 'no tenemos ningún cliente esperando',
  '=1' : 'tenemos un cliente esperando',
  'other' : 'tenemos # clientes esperando'
}

borrarCliente(){
  if (this.clientes.length > 0) {
    this.clientes.shift();
  }
  return true;
}



//keyValue pipe

persona = {
  nombre: "matias",
  edad: 30,
  direccion: "24 de septiembre"
}



}
