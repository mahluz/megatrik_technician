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
import { IonicPage } from 'ionic-angular';
var SplashScreenLayout2 = /** @class */ (function () {
    function SplashScreenLayout2() {
    }
    SplashScreenLayout2.prototype.ngOnChanges = function (changes) {
        clearInterval(this.timer);
        this.executeEvents();
    };
    SplashScreenLayout2.prototype.getData = function () {
        return this.data;
    };
    SplashScreenLayout2.prototype.getEvents = function () {
        return this.events;
    };
    SplashScreenLayout2.prototype.executeEvents = function () {
        var duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
        var events = null;
        if (this.getEvents()) {
            events = this.getEvents()['onRedirect'];
        }
        this.timer = setTimeout(function () {
            if (events) {
                events();
            }
        }, duration);
    };
    SplashScreenLayout2.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Input('data'),
        __metadata("design:type", Object)
    ], SplashScreenLayout2.prototype, "data", void 0);
    __decorate([
        Input('events'),
        __metadata("design:type", Object)
    ], SplashScreenLayout2.prototype, "events", void 0);
    SplashScreenLayout2 = __decorate([
        IonicPage(),
        Component({
            selector: 'splash-screen-layout-2',
            templateUrl: 'splash-screen.html'
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenLayout2);
    return SplashScreenLayout2;
}());
export { SplashScreenLayout2 };
//# sourceMappingURL=splash-screen-layout-2.js.map