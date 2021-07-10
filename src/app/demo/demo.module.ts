import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './components/demo/demo.component';

@NgModule ({
    declarations: [
        DemoComponent
    ],
    imports: [
        DemoRoutingModule,
        CommonModule,
        SharedModule,
        FormsModule
    ]
})

export class DemoModule {}
