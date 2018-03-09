import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './order';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ParallaxLayout1Module } from '../../components/parallax/layout-1/parallax-layout-1.module';

@NgModule({
  declarations: [
    OrderPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPage),
    ParallaxLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderPageModule {}
