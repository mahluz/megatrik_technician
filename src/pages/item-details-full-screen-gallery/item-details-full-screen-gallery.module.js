var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageFullScreenGallery } from './item-details-full-screen-gallery';
import { FullScreenGalleryModule } from '../../components/full-screen-gallery/full-screen-gallery.module';
var ItemDetailsPageFullScreenGalleryModule = /** @class */ (function () {
    function ItemDetailsPageFullScreenGalleryModule() {
    }
    ItemDetailsPageFullScreenGalleryModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageFullScreenGallery,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageFullScreenGallery),
                FullScreenGalleryModule
            ],
            exports: [
                ItemDetailsPageFullScreenGallery
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageFullScreenGalleryModule);
    return ItemDetailsPageFullScreenGalleryModule;
}());
export { ItemDetailsPageFullScreenGalleryModule };
//# sourceMappingURL=item-details-full-screen-gallery.module.js.map