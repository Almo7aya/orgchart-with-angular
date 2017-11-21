import * as _ from 'lodash';
import { Item } from './item';

export interface Observer {
  next(data: any);
}

export interface Observable {
  subscribe(obv: Observer);
  unsubscribe(obv: Observer);
}

interface Subject extends Observer, Observable {
}

class SubjectImp implements Subject {

  private observers: Observer[] = [];

  next(data: any) {
    this.observers.forEach((obv: Observer) => {
      obv.next(data);
    });
  }
  subscribe(obv: Observer) {
    this.observers.push(obv);
  }
  unsubscribe(obv: Observer) {
    _.remove(this.observers, (obs: Observer) => obv === obs);
  }

}


class DataStore implements Observable {

  private items: Item[] = [];
  itemsListSubject = new SubjectImp();

  subscribe(obv: Observer) {
    this.itemsListSubject.subscribe(obv);
    obv.next(_.cloneDeep(this.items));
  }

  unsubscribe(obv: Observer) {
    this.itemsListSubject.unsubscribe(obv);
  }

  public initTheItems(newItems: Item[]) {
    this.items = _.cloneDeep(newItems);
    this.brodcast();
  }

  public addItem(newItem: Item) {
    this.items.push(_.cloneDeep(newItem));
    this.brodcast();
  }

  removeItem(item: Item) {
    _.remove(this.items, itemx => itemx.id === item.id);
    this.brodcast();
  }

  brodcast() {
    this.itemsListSubject.next(_.cloneDeep(this.items));
  }

}

export const store = new DataStore();
