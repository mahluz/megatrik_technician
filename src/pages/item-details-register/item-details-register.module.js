var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageRegister } from './item-details-register';
import { RegisterLayout1Module } from '../../components/register/layout-1/register-layout-1.module';
import { RegisterLayout2Module } from '../../components/register/layout-2/register-layout-2.module';
var ItemDetailsPageRegisterModule = /** @class */ (function () {
    function ItemDetailsPageRegisterModule() {
    }
    ItemDetailsPageRegisterModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageRegister,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageRegister),
                RegisterLayout1Module, RegisterLayout2Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageRegisterModule);
    return ItemDetailsPageRegisterModule;
}());
export { ItemDetailsPageRegisterModule };
//# sourceMappingURL=item-details-register.module.js.map