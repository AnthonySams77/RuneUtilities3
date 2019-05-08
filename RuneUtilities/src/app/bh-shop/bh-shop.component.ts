import { Component, OnInit } from '@angular/core';
import { ItemInfoService, IItem } from '../item-info.service';

@Component({
  selector: 'app-bh-shop',
  templateUrl: './bh-shop.component.html',
  styleUrls: ['./bh-shop.component.scss']
})
export class BhShopComponent implements OnInit {
  itemsArray:Array<IItem> = [];
  constructor(private itemDataService:ItemInfoService) {
  }
  //parseFloat("59.7k".split("k")[0]) * 1000
  ngOnInit() {
  }

}
