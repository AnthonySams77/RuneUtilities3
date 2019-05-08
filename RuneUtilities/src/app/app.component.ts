import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  title = 'RuneUtilities';
  display = false;
  
  ngOnInit() {
    this.items = [
      {label: 'Bounty Hunter Shop', icon: 'pi pi-fw pi-plus'},
      {label: 'Bolt Calculator', icon: 'pi pi-fw pi-download'}
  ];
  }
}
