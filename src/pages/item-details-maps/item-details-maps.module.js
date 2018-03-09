var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageMaps } from './item-details-maps';
import { MapsLayout1Module } from '../../components/maps/layout-1/maps-layout-1.module';
import { MapsLayout2Module } from '../../components/maps/layout-2/maps-layout-2.module';
import { MapsLayout3Module } from '../../components/maps/layout-3/maps-layout-3.module';
var ItemDetailsPageMapsModule = /** @class */ (function () {
    function ItemDetailsPageMapsModule() {
    }
    ItemDetailsPageMapsModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageMaps,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageMaps),
                MapsLayout1Module, MapsLayout2Module, MapsLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageMapsModule);
    return ItemDetailsPageMapsModule;
}());
export { ItemDetailsPageMapsModule };
//# sourceMappingURL=item-details-maps.module.js.map