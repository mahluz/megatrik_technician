var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout4 } from './appearance-animation-layout-4';
var AppearanceAnimationLayout4Module = /** @class */ (function () {
    function AppearanceAnimationLayout4Module() {
    }
    AppearanceAnimationLayout4Module = __decorate([
        NgModule({
            declarations: [
                AppearanceAnimationLayout4,
            ],
            imports: [
                IonicPageModule.forChild(AppearanceAnimationLayout4),
            ],
            exports: [
                AppearanceAnimationLayout4
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppearanceAnimationLayout4Module);
    return AppearanceAnimationLayout4Module;
}());
export { AppearanceAnimationLayout4Module };
//# sourceMappingURL=appearance-animation-layout-4.module.js.map