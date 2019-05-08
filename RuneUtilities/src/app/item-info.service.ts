import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemInfoService {

  baseUrl:string = "https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";
  itemJSONLocalUrl:string = "../assets/itemInfo.json";
  simpleItemArray:ISimpleItem[] = [];
  itemArray:IItem[] = [];
  promiseArray:Promise<IItem>[] = [];


  constructor(private http:HttpClient) {
    this.loadBHItemInfo();
  }

  ngOnInit() {
  }

  async loadBHItemInfo() {
    await this.http.get<ISimpleItem[]>(this.itemJSONLocalUrl).toPromise()
      .then((res:ISimpleItem[]) => {
        res.forEach((item:ISimpleItem) => {
          this.simpleItemArray.push(item);
          });
        });

    this.simpleItemArray.forEach((item) => {
      this.promiseArray.push(this.getGEInfo(item.id));
    });
    Promise.all(this.promiseArray).then((items:Item[]) => {
      items.forEach((singleItem:Item) => {
        console.log(singleItem);
        this.simpleItemArray.forEach((simpleItem:ISimpleItem) => {
          if (singleItem.item.id.toString() === simpleItem.id) {
            singleItem.item.bhPrice = simpleItem.BhPrice;
            singleItem.item.goldRatio = (parseFloat(singleItem.item.current.price.split("k")[0]) * 1000) / singleItem.item.bhPrice;
            this.itemArray.push(singleItem);
          }
        })
      })
    });
  }

  async getGEInfo(id:string): Promise<IItem>{
    return this.http.get<IItem>(this.baseUrl + id).toPromise<IItem>();
  }
}

export interface ISimpleItem {
  name:string;
  id:string;
  BhPrice:number;
}

export interface IItem {
  item: {
  icon:string;
  icon_large:string;
  id:string;
  typeIcon:string;
  name:string;
  current:ITrend;
  today:ITrend;
  goldRatio:number;
  }
  
}

export interface ITrend {
  trend:string;
  price:string;
}

export class Item implements IItem {
  item: {
  icon:string;
  icon_large:string;
  id:string;
  typeIcon:string;
  name:string;
  current:ITrend;
  today:ITrend;
  bhPrice:number;
  goldRatio:number;
  }

  constructor(item:Partial<IItem>, bhPoint?:number) {
    Object.assign(item);
    this.item.bhPrice = bhPoint;
  }
  public addBhPrice(bhPoint:number): void {
    this.item.bhPrice = bhPoint;
  }

  public getGoldRatio():number {
    return (parseFloat(this.item.today.price.split("k")[0]) * 1000) / this.item.bhPrice;
  }
  
}

export class Trend implements ITrend {
  trend:string;
  price:string;
}


