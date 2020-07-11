import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { ShopComponent } from './layouts/shop/shop.component';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ProductComponent } from './shop/product/product.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        component: ShopHomeComponent
      },
      {
        path: 'shop',
        component: ShopHomeComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      //{
      //  path: '',
      //  component: HomeComponent
      //},
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'counter',
        component: CounterComponent
      },
      {
        path: 'fetch-data',
        component: FetchDataComponent
      }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
