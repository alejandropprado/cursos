import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimengModule } from '../primeng/primeng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCase } from './pipes/toggle-case.pipe';
import { CanFly } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicPagesComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,
    ToggleCase,
    CanFly,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimengModule],
})
export class ProductsModule {}
