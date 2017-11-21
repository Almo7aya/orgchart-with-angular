import { Component, OnInit } from '@angular/core';
import { Item, fakeItems } from '../shared/models/item';
import { Observer, store } from '../shared/models/app-store';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit, Observer {

  items: Item;

  constructor() { }

  ngOnInit() {

    store.subscribe(this);

  }

  next(data: any) {
    this.items = data;
  }


  addItem(itemName: String) {
    store.addItem({ name: itemName, id: Math.random() });
  }

  deleteItem(item: Item) {
    store.removeItem(item);
  }


}
