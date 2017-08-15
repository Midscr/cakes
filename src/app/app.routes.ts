import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { CakesOverviewComponent } from './CakesOverview\u200B';
import { CakesCustomizeComponent } from './CakesCustomize\u200B';
import { CartComponent } from './Cart';

export const ROUTES: Routes = [
  { path: '', component: CakesOverviewComponent },
  { path: 'cakes', component: CakesOverviewComponent },
  { path: 'cake/:id', component: CakesCustomizeComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NoContentComponent },
];
