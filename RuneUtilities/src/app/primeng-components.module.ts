//ngprime-components.module.ts
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  imports: [
    ButtonModule, 
    RatingModule, 
    TableModule, 
    DropdownModule,
    CheckboxModule
],
  exports: [
      ButtonModule, 
      RatingModule, 
      TableModule, 
      DropdownModule,
      CheckboxModule
    ]
})
export class NgPrimeComponentsModule{}