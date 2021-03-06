var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton } from 'ionic-angular';
var AppearanceAnimationLayout1 = /** @class */ (function () {
    function AppearanceAnimationLayout1() {
        this.animateItems = [];
        this.animateClass = { 'fade-in-left-item': true };
    }
    AppearanceAnimationLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout1.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.items.length; i++) {
                _loop_1(i);
            }
        }
    };
    AppearanceAnimationLayout1.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout1.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout1.prototype, "events", void 0);
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], AppearanceAnimationLayout1.prototype, "content", void 0);
    __decorate([
        ViewChild(FabButton),
        __metadata("design:type", FabButton)
    ], AppearanceAnimationLayout1.prototype, "fabButton", void 0);
    AppearanceAnimationLayout1 = __decorate([
        IonicPage(),
        Component({
            selector: 'appearance-animation-layout-1',
            templateUrl: 'appearance-animation.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppearanceAnimationLayout1);
    return AppearanceAnimationLayout1;
}());
export { AppearanceAnimationLayout1 };
//# sourceMappingURL=appearance-animation-layout-1.js.map