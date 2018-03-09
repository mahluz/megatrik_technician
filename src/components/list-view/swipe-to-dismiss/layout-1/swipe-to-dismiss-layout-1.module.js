var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeToDismissLayout1 } from './swipe-to-dismiss-layout-1';
var SwipeToDismissLayout1Module = /** @class */ (function () {
    function SwipeToDismissLayout1Module() {
    }
    SwipeToDismissLayout1Module = __decorate([
        NgModule({
            declarations: [
                SwipeToDismissLayout1,
            ],
            imports: [
                IonicPageModule.forChild(SwipeToDismissLayout1),
            ],
            exports: [
                SwipeToDismissLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SwipeToDismissLayout1Module);
    return SwipeToDismissLayout1Module;
}());
export { SwipeToDismissLayout1Module };
//# sourceMappingURL=swipe-to-dismiss-layout-1.module.js.map