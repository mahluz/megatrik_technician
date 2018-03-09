var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
var HomeService = /** @class */ (function () {
    function HomeService(af) {
        this.af = af;
        this.getData = function () {
            return {
                "toolbarTitle": "Ionic3 UI Theme - Blue Light",
                "title": "SAVE HOURS",
                "subtitle": "OF DEVELOPING",
                "subtitle2": "and make apps fast as light!",
                "link": "http://csform.com/documentation-for-ionic-3-ui-template-app-blue-light/",
                "description": "For better understanding how our template works please read documentation.",
                "background": "assets/images/background/29.jpg"
            };
        };
    }
    HomeService.prototype.load = function () {
        var _this = this;
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new Observable(function (observer) {
                observer.next(_this.getData());
                observer.complete();
            });
        }
    };
    HomeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home-service.js.map