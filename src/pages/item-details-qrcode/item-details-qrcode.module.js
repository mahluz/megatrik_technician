var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageQRCode } from './item-details-qrcode';
import { QRcodeLayout1Module } from '../../components/qrcode/layout-1/qrcode-layout-1.module';
var ItemDetailsPageQRCodeModule = /** @class */ (function () {
    function ItemDetailsPageQRCodeModule() {
    }
    ItemDetailsPageQRCodeModule = __decorate([
        NgModule({
            declarations: [
                ItemDetailsPageQRCode,
            ],
            imports: [
                IonicPageModule.forChild(ItemDetailsPageQRCode),
                QRcodeLayout1Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ItemDetailsPageQRCodeModule);
    return ItemDetailsPageQRCodeModule;
}());
export { ItemDetailsPageQRCodeModule };
//# sourceMappingURL=item-details-qrcode.module.js.map