var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetLayout3 } from './action-sheet-layout-3';
var ActionSheetLayout3Module = /** @class */ (function () {
    function ActionSheetLayout3Module() {
    }
    ActionSheetLayout3Module = __decorate([
        NgModule({
            declarations: [
                ActionSheetLayout3,
            ],
            imports: [
                IonicPageModule.forChild(ActionSheetLayout3)
            ],
            exports: [
                ActionSheetLayout3
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ActionSheetLayout3Module);
    return ActionSheetLayout3Module;
}());
export { ActionSheetLayout3Module };
//# sourceMappingURL=action-sheet-layout-3.module.js.map