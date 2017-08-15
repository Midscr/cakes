import { Injectable } from '@angular/core';
import { Observable, Subscription, ReplaySubject } from 'rxjs';

interface ListItem {
  id: number;
  name: string;
}

@Injectable()
export class CartService {
  public listStream: ReplaySubject<number[]> = new ReplaySubject<number[]>(1);
  private _list: number[] = [];

  public add(id: number) {
    this._list.push(id);
    this.listStream.next(this._list);
  }

  public remove(id: number) {
    this._list.splice(this._list.indexOf(id), 1);
    this.listStream.next(this._list);
  }
}
