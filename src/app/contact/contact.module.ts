import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './components/contact/contact.component';

@NgModule ({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule,
        CommonModule,
        SharedModule
    ]
})

export class ContactModule {}
