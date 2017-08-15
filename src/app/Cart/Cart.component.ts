import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'Cart',
  templateUrl: './Cart.component.html',
})
export class CartComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Cart` component');
  }

}
