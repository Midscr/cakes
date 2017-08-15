import { Component, OnInit } from '@angular/core';
import { CakeService } from '../Services/cake.service';

@Component({
  selector: 'CakesOverview​',
  styleUrls: ['./CakesOverview​.component.css'],
  templateUrl: './CakesOverview​.component.html'
})
export class CakesOverviewComponent implements OnInit {
  public list = [];

  private _value: number;
  public get value() {
    return this._value;
  }
  public set value(v: number) {
    this._value = v * 2;
  }

  constructor(private _cakeService: CakeService) {
    this._cakeService.getList().then((res) => {
      this.list = res;
      console.log(res);
    });
    this.value = 22;
    console.log(this.value);
  }

  public ngOnInit() {
    console.log('hello `CakesOverview​` component');
  }
}
