var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageCheckBox } from './item-details-check-box';
import { CheckBoxLayout1Module } from '../../components/check-box/layout-1/check-box-layout-1.module';
import { CheckBoxLayout2Module } from '../../components/check-box/layout-2/check-box-layout-2.module';
import { CheckBoxLayout3Module } from '../../components/check-box/layout-3/check-box-layout-3.module';
var ItemDetailsPageCheckBoxModule = /** @class */ (function () {
    function ItemDetailsPageCheckBoxModule() {
    }
    ItemDetailsPageCheckBoxModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageCheckBox,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageCheckBox),
                CheckBoxLayout1Module, CheckBoxLayout2Module, CheckBoxLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageCheckBoxModule);
    return ItemDetailsPageCheckBoxModule;
}());
export { ItemDetailsPageCheckBoxModule };
//# sourceMappingURL=item-details-check-box.module.js.map