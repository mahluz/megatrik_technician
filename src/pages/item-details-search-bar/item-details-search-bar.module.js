var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSearchBar } from './item-details-search-bar';
import { SearchBarLayout1Module } from '../../components/search-bar/layout-1/search-bar-layout-1.module';
import { SearchBarLayout2Module } from '../../components/search-bar/layout-2/search-bar-layout-2.module';
import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';
var ItemDetailsPageSearchBarModule = /** @class */ (function () {
    function ItemDetailsPageSearchBarModule() {
    }
    ItemDetailsPageSearchBarModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageSearchBar,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageSearchBar),
                SearchBarLayout1Module, SearchBarLayout2Module, SearchBarLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageSearchBarModule);
    return ItemDetailsPageSearchBarModule;
}());
export { ItemDetailsPageSearchBarModule };
//# sourceMappingURL=item-details-search-bar.module.js.map