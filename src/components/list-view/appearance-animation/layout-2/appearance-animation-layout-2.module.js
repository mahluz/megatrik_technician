var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout2 } from './appearance-animation-layout-2';
var AppearanceAnimationLayout2Module = /** @class */ (function () {
    function AppearanceAnimationLayout2Module() {
    }
    AppearanceAnimationLayout2Module = __decorate([
        NgModule({
            declarations: [
                AppearanceAnimationLayout2,
            ],
            imports: [
                IonicPageModule.forChild(AppearanceAnimationLayout2),
            ],
            exports: [
                AppearanceAnimationLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppearanceAnimationLayout2Module);
    return AppearanceAnimationLayout2Module;
}());
export { AppearanceAnimationLayout2Module };
//# sourceMappingURL=appearance-animation-layout-2.module.js.map