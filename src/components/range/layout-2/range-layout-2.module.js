var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeLayout2 } from './range-layout-2';
var RangeLayout2Module = /** @class */ (function () {
    function RangeLayout2Module() {
    }
    RangeLayout2Module = __decorate([
        NgModule({
            declarations: [
                RangeLayout2,
            ],
            imports: [
                IonicPageModule.forChild(RangeLayout2),
            ],
            exports: [
                RangeLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], RangeLayout2Module);
    return RangeLayout2Module;
}());
export { RangeLayout2Module };
//# sourceMappingURL=range-layout-2.module.js.map