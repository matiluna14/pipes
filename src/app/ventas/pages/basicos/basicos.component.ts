import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor() { }

  nombreLower: string = "matias";
  nombreUpper: string = "MATIAS";
  nombreCompleto: string = "mAtiAS lUna";


  fecha: Date = new Date();
}
