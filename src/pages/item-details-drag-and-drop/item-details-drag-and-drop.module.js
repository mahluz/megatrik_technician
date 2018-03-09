var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageDragAndDrop } from './item-details-drag-and-drop';
import { DragAndDropLayout1Module } from '../../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module';
import { DragAndDropLayout2Module } from '../../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module';
import { DragAndDropLayout3Module } from '../../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module';
var ItemDetailsPageDragAndDropModule = /** @class */ (function () {
    function ItemDetailsPageDragAndDropModule() {
    }
    ItemDetailsPageDragAndDropModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageDragAndDrop,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageDragAndDrop),
                DragAndDropLayout1Module, DragAndDropLayout2Module, DragAndDropLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageDragAndDropModule);
    return ItemDetailsPageDragAndDropModule;
}());
export { ItemDetailsPageDragAndDropModule };
//# sourceMappingURL=item-details-drag-and-drop.module.js.map