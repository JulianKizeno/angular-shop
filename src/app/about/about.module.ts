import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AboutComponent } from './components/about/about.component';

@NgModule ({
    declarations: [
        AboutComponent
    ],
    imports: [
        AboutRoutingModule,
        CommonModule,
        SharedModule
    ]
})

export class AboutModule {}
