var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetLayout1 } from './action-sheet-layout-1';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';
var ActionSheetLayout1Module = /** @class */ (function () {
    function ActionSheetLayout1Module() {
    }
    ActionSheetLayout1Module = __decorate([
        NgModule({
            declarations: [
                ActionSheetLayout1,
            ],
            imports: [
                IonicPageModule.forChild(ActionSheetLayout1),
                ElasticHeaderModule
            ],
            exports: [
                ActionSheetLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ActionSheetLayout1Module);
    return ActionSheetLayout1Module;
}());
export { ActionSheetLayout1Module };
//# sourceMappingURL=action-sheet-layout-1.module.js.map