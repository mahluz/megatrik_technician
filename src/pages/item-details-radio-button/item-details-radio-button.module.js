var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageRadioButton } from './item-details-radio-button';
import { RadioButtonLayout1Module } from '../../components/radio-button/layout-1/radio-button-layout-1.module';
import { RadioButtonLayout2Module } from '../../components/radio-button/layout-2/radio-button-layout-2.module';
import { RadioButtonLayout3Module } from '../../components/radio-button/layout-3/radio-button-layout-3.module';
var ItemDetailsPageRadioButtonModule = /** @class */ (function () {
    function ItemDetailsPageRadioButtonModule() {
    }
    ItemDetailsPageRadioButtonModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageRadioButton,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageRadioButton),
                RadioButtonLayout1Module, RadioButtonLayout2Module,
                RadioButtonLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageRadioButtonModule);
    return ItemDetailsPageRadioButtonModule;
}());
export { ItemDetailsPageRadioButtonModule };
//# sourceMappingURL=item-details-radio-button.module.js.map