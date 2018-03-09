var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageLogin } from './item-details-login';
import { LoginLayout1Module } from '../../components/login/layout-1/login-layout-1.module';
import { LoginLayout2Module } from '../../components/login/layout-2/login-layout-2.module';
var ItemDetailsPageLoginModule = /** @class */ (function () {
    function ItemDetailsPageLoginModule() {
    }
    ItemDetailsPageLoginModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageLogin,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageLogin),
                LoginLayout1Module, LoginLayout2Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageLoginModule);
    return ItemDetailsPageLoginModule;
}());
export { ItemDetailsPageLoginModule };
//# sourceMappingURL=item-details-login.module.js.map