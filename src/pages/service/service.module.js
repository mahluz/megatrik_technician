var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterLayout1Module } from '../../components/register/layout-1/register-layout-1.module';
import { IonicPageModule } from 'ionic-angular';
import { ServicePage } from './service';
import { GoogleMaps } from '@ionic-native/google-maps';
var ServicePageModule = /** @class */ (function () {
    function ServicePageModule() {
    }
    ServicePageModule = __decorate([
        NgModule({
            declarations: [
                ServicePage,
            ],
            imports: [
                IonicPageModule.forChild(ServicePage),
                RegisterLayout1Module
            ],
            providers: [
                GoogleMaps
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ServicePageModule);
    return ServicePageModule;
}());
export { ServicePageModule };
//# sourceMappingURL=service.module.js.map