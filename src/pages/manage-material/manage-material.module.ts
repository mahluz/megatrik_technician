import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageMaterialPage } from './manage-material';

@NgModule({
  declarations: [
    ManageMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageMaterialPage),
  ],
})
export class ManageMaterialPageModule {}
