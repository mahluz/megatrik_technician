var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout3 } from './appearance-animation-layout-3';
var AppearanceAnimationLayout3Module = /** @class */ (function () {
    function AppearanceAnimationLayout3Module() {
    }
    AppearanceAnimationLayout3Module = __decorate([
        NgModule({
            declarations: [
                AppearanceAnimationLayout3,
            ],
            imports: [
                IonicPageModule.forChild(AppearanceAnimationLayout3),
            ],
            exports: [
                AppearanceAnimationLayout3
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppearanceAnimationLayout3Module);
    return AppearanceAnimationLayout3Module;
}());
export { AppearanceAnimationLayout3Module };
//# sourceMappingURL=appearance-animation-layout-3.module.js.map