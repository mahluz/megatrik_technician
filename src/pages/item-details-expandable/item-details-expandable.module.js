var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageExpandable } from './item-details-expandable';
import { ExpandableLayout1Module } from '../../components/list-view/expandable/layout-1/expandable-layout-1.module';
import { ExpandableLayout2Module } from '../../components/list-view/expandable/layout-2/expandable-layout-2.module';
import { ExpandableLayout3Module } from '../../components/list-view/expandable/layout-3/expandable-layout-3.module';
var ItemDetailsPageExpandableModule = /** @class */ (function () {
    function ItemDetailsPageExpandableModule() {
    }
    ItemDetailsPageExpandableModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageExpandable,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageExpandable),
                ExpandableLayout1Module, ExpandableLayout2Module, ExpandableLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageExpandableModule);
    return ItemDetailsPageExpandableModule;
}());
export { ItemDetailsPageExpandableModule };
//# sourceMappingURL=item-details-expandable.module.js.map