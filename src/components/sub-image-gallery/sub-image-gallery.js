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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
var SubImageGallery = /** @class */ (function () {
    function SubImageGallery(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.openImageSlider = function (group, index) {
            _this.navCtrl.push(group.fullscreen, {
                'group': group.items,
                'index': index
            });
        };
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SubImageGallery.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SubImageGallery.prototype, "events", void 0);
    SubImageGallery = __decorate([
        IonicPage(),
        Component({
            selector: 'sub-image-gallery',
            templateUrl: 'sub-image-gallery.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SubImageGallery);
    return SubImageGallery;
}());
export { SubImageGallery };
//# sourceMappingURL=sub-image-gallery.js.map