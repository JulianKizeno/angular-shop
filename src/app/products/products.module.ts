import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module'

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule ({
    declarations: [
        ProductsComponent,
        ProductComponent
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductsModule {}
