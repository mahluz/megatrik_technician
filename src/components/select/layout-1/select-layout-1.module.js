var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout1 } from './select-layout-1';
var SelectLayout1Module = /** @class */ (function () {
    function SelectLayout1Module() {
    }
    SelectLayout1Module = __decorate([
        NgModule({
            declarations: [
                SelectLayout1,
            ],
            imports: [
                IonicPageModule.forChild(SelectLayout1),
            ],
            exports: [
                SelectLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SelectLayout1Module);
    return SelectLayout1Module;
}());
export { SelectLayout1Module };
//# sourceMappingURL=select-layout-1.module.js.map