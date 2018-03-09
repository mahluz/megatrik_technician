var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageActionSheet } from './item-details-action-sheet';
import { ActionSheetLayout1Module } from '../../components/action-sheet/layout-1/action-sheet-layout-1.module';
import { ActionSheetLayout2Module } from '../../components/action-sheet/layout-2/action-sheet-layout-2.module';
import { ActionSheetLayout3Module } from '../../components/action-sheet/layout-3/action-sheet-layout-3.module';
var ItemDetailsPageActionSheetModule = /** @class */ (function () {
    function ItemDetailsPageActionSheetModule() {
    }
    ItemDetailsPageActionSheetModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageActionSheet,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageActionSheet),
                ActionSheetLayout1Module, ActionSheetLayout2Module, ActionSheetLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageActionSheetModule);
    return ItemDetailsPageActionSheetModule;
}());
export { ItemDetailsPageActionSheetModule };
//# sourceMappingURL=item-details-action-sheet.module.js.map