var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout6 } from './select-layout-6';
var SelectLayout6Module = /** @class */ (function () {
    function SelectLayout6Module() {
    }
    SelectLayout6Module = __decorate([
        NgModule({
            declarations: [
                SelectLayout6,
            ],
            imports: [
                IonicPageModule.forChild(SelectLayout6),
            ],
            exports: [
                SelectLayout6
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SelectLayout6Module);
    return SelectLayout6Module;
}());
export { SelectLayout6Module };
//# sourceMappingURL=select-layout-6.module.js.map