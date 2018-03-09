var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
var FullScreenGallery = /** @class */ (function () {
    function FullScreenGallery(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.isLocked = false;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.onDoubleClick = function (e, slides) {
            _this.isLocked = !_this.isLocked;
            slides.lockSwipes(_this.isLocked);
        };
        this.sliderOptions = {
            pager: true
        };
    }
    FullScreenGallery.prototype.ionViewDidLoad = function () {
        this.sliderOptions = {
            pager: true,
            loop: true,
            zoom: true,
            initialSlide: this.data.index
        };
        debugger;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FullScreenGallery.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FullScreenGallery.prototype, "events", void 0);
    __decorate([
        ViewChild('slider'),
        __metadata("design:type", Slides)
    ], FullScreenGallery.prototype, "slider", void 0);
    FullScreenGallery = __decorate([
        IonicPage(),
        Component({
            selector: 'full-screen-gallery',
            templateUrl: 'full-screen-gallery.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FullScreenGallery);
    return FullScreenGallery;
}());
export { FullScreenGallery };
//# sourceMappingURL=full-screen-gallery.js.map