import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { store, Observer } from './shared/models/app-store';
import { fakeItems } from './shared/models/item';

@Component({
  selector: 'app-root',
  template: `

    <h1>RX Store</h1>

    <app-list-view></app-list-view>

  `
})
export class AppComponent implements OnInit, Observer {

  ngOnInit() {
    if (localStorage.getItem('itemsList')) {
      store.initTheItems(JSON.parse(localStorage.getItem('itemsList')));
    } else {
      store.initTheItems(fakeItems.slice(0));
    }

    store.subscribe(this);
  }

  next(data: any) {
    localStorage.setItem('itemsList', JSON.stringify(data));
  }

}
