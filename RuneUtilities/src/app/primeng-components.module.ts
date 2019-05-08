//ngprime-components.module.ts
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';

@NgModule({
  imports: [
    ButtonModule, 
    RatingModule, 
    TableModule, 
    DropdownModule,
    CheckboxModule,
    SidebarModule,
    ToolbarModule,
    MenuModule
],
  exports: [
      ButtonModule, 
      RatingModule, 
      TableModule, 
      DropdownModule,
      CheckboxModule,
      SidebarModule,
      ToolbarModule,
      MenuModule
    ]
})
export class NgPrimeComponentsModule{}