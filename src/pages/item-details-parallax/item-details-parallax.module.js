var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageParallax } from './item-details-parallax';
import { ParallaxLayout1Module } from '../../components/parallax/layout-1/parallax-layout-1.module';
import { ParallaxLayout2Module } from '../../components/parallax/layout-2/parallax-layout-2.module';
import { ParallaxLayout3Module } from '../../components/parallax/layout-3/parallax-layout-3.module';
import { ParallaxLayout4Module } from '../../components/parallax/layout-4/parallax-layout-4.module';
var ItemDetailsPageParallaxModule = /** @class */ (function () {
    function ItemDetailsPageParallaxModule() {
    }
    ItemDetailsPageParallaxModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageParallax,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageParallax),
                ParallaxLayout1Module, ParallaxLayout2Module, ParallaxLayout3Module, ParallaxLayout4Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageParallaxModule);
    return ItemDetailsPageParallaxModule;
}());
export { ItemDetailsPageParallaxModule };
//# sourceMappingURL=item-details-parallax.module.js.map