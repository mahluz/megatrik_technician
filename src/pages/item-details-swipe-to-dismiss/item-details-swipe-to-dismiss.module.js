var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSwipeToDismiss } from './item-details-swipe-to-dismiss';
import { SwipeToDismissLayout1Module } from '../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { SwipeToDismissLayout2Module } from '../../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module';
import { SwipeToDismissLayout3Module } from '../../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module';
var ItemDetailsPageSwipeToDismissModule = /** @class */ (function () {
    function ItemDetailsPageSwipeToDismissModule() {
    }
    ItemDetailsPageSwipeToDismissModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageSwipeToDismiss,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageSwipeToDismiss),
                SwipeToDismissLayout1Module, SwipeToDismissLayout2Module, SwipeToDismissLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageSwipeToDismissModule);
    return ItemDetailsPageSwipeToDismissModule;
}());
export { ItemDetailsPageSwipeToDismissModule };
//# sourceMappingURL=item-details-swipe-to-dismiss.module.js.map