var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragAndDropLayout1 } from './drag-and-drop-layout-1';
var DragAndDropLayout1Module = /** @class */ (function () {
    function DragAndDropLayout1Module() {
    }
    DragAndDropLayout1Module = __decorate([
        NgModule({
            declarations: [
                DragAndDropLayout1,
            ],
            imports: [
                IonicPageModule.forChild(DragAndDropLayout1),
            ],
            exports: [
                DragAndDropLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DragAndDropLayout1Module);
    return DragAndDropLayout1Module;
}());
export { DragAndDropLayout1Module };
//# sourceMappingURL=drag-and-drop-layout-1.module.js.map