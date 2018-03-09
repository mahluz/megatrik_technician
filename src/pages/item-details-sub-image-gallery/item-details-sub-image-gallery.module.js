var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSubImageGallery } from './item-details-sub-image-gallery';
import { SubImageGalleryModule } from '../../components/sub-image-gallery/sub-image-gallery.module';
var ItemDetailsPageSubImageGalleryModule = /** @class */ (function () {
    function ItemDetailsPageSubImageGalleryModule() {
    }
    ItemDetailsPageSubImageGalleryModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageSubImageGallery,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageSubImageGallery),
                SubImageGalleryModule
            ],
            exports: [
                ItemDetailsPageSubImageGallery
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageSubImageGalleryModule);
    return ItemDetailsPageSubImageGalleryModule;
}());
export { ItemDetailsPageSubImageGalleryModule };
//# sourceMappingURL=item-details-sub-image-gallery.module.js.map