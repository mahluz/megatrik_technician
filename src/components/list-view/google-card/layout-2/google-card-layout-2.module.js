var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout2 } from './google-card-layout-2';
var GoogleCardLayout2Module = /** @class */ (function () {
    function GoogleCardLayout2Module() {
    }
    GoogleCardLayout2Module = __decorate([
        NgModule({
            declarations: [
                GoogleCardLayout2,
            ],
            imports: [
                IonicPageModule.forChild(GoogleCardLayout2),
            ],
            exports: [
                GoogleCardLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], GoogleCardLayout2Module);
    return GoogleCardLayout2Module;
}());
export { GoogleCardLayout2Module };
//# sourceMappingURL=google-card-layout-2.module.js.map