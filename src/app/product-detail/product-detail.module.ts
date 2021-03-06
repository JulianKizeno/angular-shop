import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule ({
    declarations: [
        ProductDetailComponent
    ],
    imports: [
        ProductDetailRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class ProductDetailModule {}
