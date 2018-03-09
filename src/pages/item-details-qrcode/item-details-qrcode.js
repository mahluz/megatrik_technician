var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var ItemDetailsPageQRCode = /** @class */ (function () {
    function ItemDetailsPageQRCode(navCtrl, navParams, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.service.load(this.page).subscribe(function (snapshot) {
                _this.params.data = snapshot;
            });
            this.scanner();
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageQRCode.prototype.scanner = function () {
        var _this = this;
        this.barcodeScanner.scan()
            .then(function (result) {
            _this.params.data = result;
        })
            .catch(function (error) {
            alert(error);
        });
    };
    ItemDetailsPageQRCode = __decorate([
        IonicPage(),
        Component({
            templateUrl: 'item-details-qrcode.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, BarcodeScanner])
    ], ItemDetailsPageQRCode);
    return ItemDetailsPageQRCode;
}());
export { ItemDetailsPageQRCode };
//# sourceMappingURL=item-details-qrcode.js.map