import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CakeService {
  private _list: any[] = [];

  constructor(private _http: Http) { }

  public getList(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (this._list.length) { return resolve(this._list); }

      this._http.get('http://dev.cakeiteasy.no/api/search?bakery=4934&count=100&type=1')
        .subscribe((resp) => {
          this._list = resp.json();
          resolve(this._list);
        }, (err) => {
          reject({ status: err });
        });
    });
  }

}
