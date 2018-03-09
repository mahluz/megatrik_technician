var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageGalleryLayout1 } from './image-gallery-layout-1';
var ImageGalleryLayout1Module = /** @class */ (function () {
    function ImageGalleryLayout1Module() {
    }
    ImageGalleryLayout1Module = __decorate([
        NgModule({
            declarations: [
                ImageGalleryLayout1
            ],
            imports: [
                IonicPageModule.forChild(ImageGalleryLayout1)
            ],
            exports: [
                ImageGalleryLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ImageGalleryLayout1Module);
    return ImageGalleryLayout1Module;
}());
export { ImageGalleryLayout1Module };
//# sourceMappingURL=image-gallery-layout-1.module.js.map