import { NgModule } from '@angular/core';
import { CakeService } from './cake.service';
import { CartService } from './cart.service';

@NgModule({
  providers: [CakeService, CartService],
})
export class ServicesModule { }
