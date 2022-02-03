import { NgModule } from '@angular/core';

//primeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
