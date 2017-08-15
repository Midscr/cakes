import { Component, OnInit } from '@angular/core';
import { CakeService } from '../Services/cake.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'CakesOverview​',
  styleUrls: ['./CakesOverview​.component.css'],
  templateUrl: './CakesOverview​.component.html'
})
export class CakesOverviewComponent implements OnInit {
  public list = [];
  public cartList = [];
  constructor(private _cakeService: CakeService, private _cartService: CartService) {
    this._cakeService.getList().then((res) => {
      this.list = res;
    });
    this._cartService.listStream.subscribe((v) => {
      this.cartList = v;
      console.log(this.cartList);
    });
  }

  public ngOnInit() {
    console.log('hello `CakesOverview​` component');
  }

  public addToCart(id: number) {
    this._cartService.add(id);
  }

  public removeFromCart(id: number) {
    this._cartService.remove(id);
  }
}
