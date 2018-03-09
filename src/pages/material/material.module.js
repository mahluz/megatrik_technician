var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialPage } from './material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';
var MaterialPageModule = /** @class */ (function () {
    function MaterialPageModule() {
    }
    MaterialPageModule = __decorate([
        NgModule({
            declarations: [
                MaterialPage,
            ],
            imports: [
                IonicPageModule.forChild(MaterialPage),
                GoogleCardLayout1Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], MaterialPageModule);
    return MaterialPageModule;
}());
export { MaterialPageModule };
//# sourceMappingURL=material.module.js.map