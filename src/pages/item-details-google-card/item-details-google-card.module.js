var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageGoogleCard } from './item-details-google-card';
import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';
import { GoogleCardLayout2Module } from '../../components/list-view/google-card/layout-2/google-card-layout-2.module';
import { GoogleCardLayout3Module } from '../../components/list-view/google-card/layout-3/google-card-layout-3.module';
var ItemDetailsPageGoogleCardModule = /** @class */ (function () {
    function ItemDetailsPageGoogleCardModule() {
    }
    ItemDetailsPageGoogleCardModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageGoogleCard,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageGoogleCard),
                GoogleCardLayout1Module, GoogleCardLayout2Module, GoogleCardLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageGoogleCardModule);
    return ItemDetailsPageGoogleCardModule;
}());
export { ItemDetailsPageGoogleCardModule };
//# sourceMappingURL=item-details-google-card.module.js.map