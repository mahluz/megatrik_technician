var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageRange } from './item-details-range';
import { RangeLayout1Module } from '../../components/range/layout-1/range-layout-1.module';
import { RangeLayout2Module } from '../../components/range/layout-2/range-layout-2.module';
import { RangeLayout3Module } from '../../components/range/layout-3/range-layout-3.module';
import { RangeLayout4Module } from '../../components/range/layout-4/range-layout-4.module';
var ItemDetailsPageRangeModule = /** @class */ (function () {
    function ItemDetailsPageRangeModule() {
    }
    ItemDetailsPageRangeModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageRange,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageRange),
                RangeLayout1Module, RangeLayout2Module, RangeLayout3Module, RangeLayout4Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageRangeModule);
    return ItemDetailsPageRangeModule;
}());
export { ItemDetailsPageRangeModule };
//# sourceMappingURL=item-details-range.module.js.map