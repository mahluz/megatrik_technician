var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout1 } from './google-card-layout-1';
var GoogleCardLayout1Module = /** @class */ (function () {
    function GoogleCardLayout1Module() {
    }
    GoogleCardLayout1Module = __decorate([
        NgModule({
            declarations: [
                GoogleCardLayout1,
            ],
            imports: [
                IonicPageModule.forChild(GoogleCardLayout1),
            ],
            exports: [
                GoogleCardLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], GoogleCardLayout1Module);
    return GoogleCardLayout1Module;
}());
export { GoogleCardLayout1Module };
//# sourceMappingURL=google-card-layout-1.module.js.map