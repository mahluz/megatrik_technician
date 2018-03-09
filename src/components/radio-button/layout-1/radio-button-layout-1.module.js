var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioButtonLayout1 } from './radio-button-layout-1';
var RadioButtonLayout1Module = /** @class */ (function () {
    function RadioButtonLayout1Module() {
    }
    RadioButtonLayout1Module = __decorate([
        NgModule({
            declarations: [
                RadioButtonLayout1,
            ],
            imports: [
                IonicPageModule.forChild(RadioButtonLayout1),
            ],
            exports: [
                RadioButtonLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], RadioButtonLayout1Module);
    return RadioButtonLayout1Module;
}());
export { RadioButtonLayout1Module };
//# sourceMappingURL=radio-button-layout-1.module.js.map