var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageImageGallery } from './item-details-image-gallery';
import { ImageGalleryLayout1Module } from '../../components/image-gallery/layout-1/image-gallery-layout-1.module';
import { ImageGalleryLayout2Module } from '../../components/image-gallery/layout-2/image-gallery-layout-2.module';
import { SubImageGalleryModule } from '../../components/sub-image-gallery/sub-image-gallery.module';
var ItemDetailsPageImageGalleryModule = /** @class */ (function () {
    function ItemDetailsPageImageGalleryModule() {
    }
    ItemDetailsPageImageGalleryModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageImageGallery,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageImageGallery),
                ImageGalleryLayout1Module, ImageGalleryLayout2Module, SubImageGalleryModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageImageGalleryModule);
    return ItemDetailsPageImageGalleryModule;
}());
export { ItemDetailsPageImageGalleryModule };
//# sourceMappingURL=item-details-image-gallery.module.js.map