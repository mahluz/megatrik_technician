var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout3 } from './google-card-layout-3';
var GoogleCardLayout3Module = /** @class */ (function () {
    function GoogleCardLayout3Module() {
    }
    GoogleCardLayout3Module = __decorate([
        NgModule({
            declarations: [
                GoogleCardLayout3,
            ],
            imports: [
                IonicPageModule.forChild(GoogleCardLayout3),
            ],
            exports: [
                GoogleCardLayout3
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], GoogleCardLayout3Module);
    return GoogleCardLayout3Module;
}());
export { GoogleCardLayout3Module };
//# sourceMappingURL=google-card-layout-3.module.js.map