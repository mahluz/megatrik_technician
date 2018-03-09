var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeLayout3 } from './range-layout-3';
var RangeLayout3Module = /** @class */ (function () {
    function RangeLayout3Module() {
    }
    RangeLayout3Module = __decorate([
        NgModule({
            declarations: [
                RangeLayout3,
            ],
            imports: [
                IonicPageModule.forChild(RangeLayout3),
            ],
            exports: [
                RangeLayout3
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], RangeLayout3Module);
    return RangeLayout3Module;
}());
export { RangeLayout3Module };
//# sourceMappingURL=range-layout-3.module.js.map