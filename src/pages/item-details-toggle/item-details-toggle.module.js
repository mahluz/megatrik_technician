var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageToggle } from './item-details-toggle';
import { ToggleLayout1Module } from '../../components/toggle/layout-1/toggle-layout-1.module';
import { ToggleLayout2Module } from '../../components/toggle/layout-2/toggle-layout-2.module';
import { ToggleLayout3Module } from '../../components/toggle/layout-3/toggle-layout-3.module';
var ItemDetailsPageToggleModule = /** @class */ (function () {
    function ItemDetailsPageToggleModule() {
    }
    ItemDetailsPageToggleModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageToggle,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageToggle),
                ToggleLayout1Module, ToggleLayout2Module, ToggleLayout3Module
            ],
            exports: [
                ItemDetailsPageToggle
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageToggleModule);
    return ItemDetailsPageToggleModule;
}());
export { ItemDetailsPageToggleModule };
//# sourceMappingURL=item-details-toggle.module.js.map