import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {MaintenanceEmployeeComponent} from './maintenance-employee.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,

      FileUploadModule,

      FuseSharedModule,
  ],
  declarations: [
      MaintenanceEmployeeComponent
  ]
})
export class MaintenanceEmployeeModule { }
