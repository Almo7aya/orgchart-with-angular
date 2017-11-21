import { Component, OnInit } from '@angular/core';
import { Observer, store } from '../shared/models/app-store';

@Component({
  selector: 'app-items-count',
  templateUrl: './items-count.component.html',
  styleUrls: ['./items-count.component.css']
})
export class ItemsCountComponent implements OnInit, Observer {

  itemsLength: Number = 0;

  constructor() { }

  ngOnInit() {
    store.subscribe(this);
  }

  next(data: any) {
    this.itemsLength = data.length;
  }

}
