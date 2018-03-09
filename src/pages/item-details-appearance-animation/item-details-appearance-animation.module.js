var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageAppearanceAnimation } from './item-details-appearance-animation';
import { AppearanceAnimationLayout1Module } from '../../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module';
import { AppearanceAnimationLayout2Module } from '../../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module';
import { AppearanceAnimationLayout3Module } from '../../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module';
import { AppearanceAnimationLayout4Module } from '../../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module';
import { AppearanceAnimationLayout5Module } from '../../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';
var ItemDetailsPageAppearanceAnimationModule = /** @class */ (function () {
    function ItemDetailsPageAppearanceAnimationModule() {
    }
    ItemDetailsPageAppearanceAnimationModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageAppearanceAnimation,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageAppearanceAnimation),
                AppearanceAnimationLayout1Module, AppearanceAnimationLayout2Module, AppearanceAnimationLayout3Module,
                AppearanceAnimationLayout4Module, AppearanceAnimationLayout5Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageAppearanceAnimationModule);
    return ItemDetailsPageAppearanceAnimationModule;
}());
export { ItemDetailsPageAppearanceAnimationModule };
//# sourceMappingURL=item-details-appearance-animation.module.js.map