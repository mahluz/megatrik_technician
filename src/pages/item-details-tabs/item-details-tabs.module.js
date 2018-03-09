var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageTabs } from './item-details-tabs';
import { TabsLayout1Module } from '../../components/tabs/layout-1/tabs-layout-1.module';
import { TabsLayout2Module } from '../../components/tabs/layout-2/tabs-layout-2.module';
import { TabsLayout3Module } from '../../components/tabs/layout-3/tabs-layout-3.module';
var ItemDetailsPageTabsModule = /** @class */ (function () {
    function ItemDetailsPageTabsModule() {
    }
    ItemDetailsPageTabsModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageTabs,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageTabs),
                TabsLayout1Module, TabsLayout2Module, TabsLayout3Module,
            ], exports: [
                ItemDetailsPageTabs
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageTabsModule);
    return ItemDetailsPageTabsModule;
}());
export { ItemDetailsPageTabsModule };
//# sourceMappingURL=item-details-tabs.module.js.map