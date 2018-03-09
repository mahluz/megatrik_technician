var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';
var QRCodeService = /** @class */ (function () {
    function QRCodeService(loadingService, toastCtrl) {
        var _this = this;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'qrcode'; };
        this.getTitle = function () { return 'Scanner'; };
        this.getAllThemes = function () {
            return [
                { "title": "Click here", "theme": "layout1" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {};
        };
        this.getDataForLayout2 = function () {
            return {};
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
                'onScan': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    QRCodeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new Observable(function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    QRCodeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoadingService, ToastService])
    ], QRCodeService);
    return QRCodeService;
}());
export { QRCodeService };
//# sourceMappingURL=qrcode-service.js.map