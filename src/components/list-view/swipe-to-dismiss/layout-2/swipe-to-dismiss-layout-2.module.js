var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeToDismissLayout2 } from './swipe-to-dismiss-layout-2';
var SwipeToDismissLayout2Module = /** @class */ (function () {
    function SwipeToDismissLayout2Module() {
    }
    SwipeToDismissLayout2Module = __decorate([
        NgModule({
            declarations: [
                SwipeToDismissLayout2,
            ],
            imports: [
                IonicPageModule.forChild(SwipeToDismissLayout2),
            ],
            exports: [
                SwipeToDismissLayout2
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SwipeToDismissLayout2Module);
    return SwipeToDismissLayout2Module;
}());
export { SwipeToDismissLayout2Module };
//# sourceMappingURL=swipe-to-dismiss-layout-2.module.js.map