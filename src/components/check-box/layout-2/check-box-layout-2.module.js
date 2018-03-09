var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBoxLayout2 } from './check-box-layout-2';
var CheckBoxLayout2Module = /** @class */ (function () {
    function CheckBoxLayout2Module() {
    }
    CheckBoxLayout2Module = __decorate([
        NgModule({
            declarations: [
                CheckBoxLayout2,
            ],
            imports: [
                IonicPageModule.forChild(CheckBoxLayout2),
            ],
            exports: [
                CheckBoxLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], CheckBoxLayout2Module);
    return CheckBoxLayout2Module;
}());
export { CheckBoxLayout2Module };
//# sourceMappingURL=check-box-layout-2.module.js.map