var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRcodeLayout1 } from './qrcode-layout-1';
var QRcodeLayout1Module = /** @class */ (function () {
    function QRcodeLayout1Module() {
    }
    QRcodeLayout1Module = __decorate([
        NgModule({
            declarations: [
                QRcodeLayout1,
            ],
            imports: [
                IonicPageModule.forChild(QRcodeLayout1),
            ],
            exports: [
                QRcodeLayout1
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], QRcodeLayout1Module);
    return QRcodeLayout1Module;
}());
export { QRcodeLayout1Module };
//# sourceMappingURL=qrcode-layout-1.module.js.map