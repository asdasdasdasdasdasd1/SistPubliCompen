import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { MailConfirmComponent } from 'app/main/authentication/mail-confirm/mail-confirm.component';

const routes = [
    {
        path     : 'auth/mail-confirm',
        component: MailConfirmComponent
    }
];

@NgModule({
    declarations: [
        MailConfirmComponent
    ],
    imports: [
        // RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule,
        RouterModule
    ]
})
export class MailConfirmModule
{
}