var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout5 } from './select-layout-5';
var SelectLayout5Module = /** @class */ (function () {
    function SelectLayout5Module() {
    }
    SelectLayout5Module = __decorate([
        NgModule({
            declarations: [
                SelectLayout5,
            ],
            imports: [
                IonicPageModule.forChild(SelectLayout5),
            ],
            exports: [
                SelectLayout5
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SelectLayout5Module);
    return SelectLayout5Module;
}());
export { SelectLayout5Module };
//# sourceMappingURL=select-layout-5.module.js.map