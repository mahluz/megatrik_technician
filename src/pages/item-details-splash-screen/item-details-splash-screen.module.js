var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSplashScreen } from './item-details-splash-screen';
import { SplashScreenLayout1Module } from '../../components/splash-screen/layout-1/splash-screen-layout-1.module';
import { SplashScreenLayout2Module } from '../../components/splash-screen/layout-2/splash-screen-layout-2.module';
import { SplashScreenLayout3Module } from '../../components/splash-screen/layout-3/splash-screen-layout-3.module';
var ItemDetailsPageSplashScreenModule = /** @class */ (function () {
    function ItemDetailsPageSplashScreenModule() {
    }
    ItemDetailsPageSplashScreenModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageSplashScreen,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageSplashScreen),
                SplashScreenLayout1Module, SplashScreenLayout2Module, SplashScreenLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageSplashScreenModule);
    return ItemDetailsPageSplashScreenModule;
}());
export { ItemDetailsPageSplashScreenModule };
//# sourceMappingURL=item-details-splash-screen.module.js.map