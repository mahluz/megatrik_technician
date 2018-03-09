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
import { LoadingService } from './loading-service';
var SplashScreenService = /** @class */ (function () {
    function SplashScreenService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'splashScreens'; };
        this.getTitle = function () { return 'Splash screens'; };
        this.getAllThemes = function () {
            return [
                { "title": "Fade in + Ken Burns 1", "theme": "layout1" },
                { "title": "Down + fade in + Ken Burns", "theme": "layout2" },
                { "title": "Down + Ken Burns", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "duration": 10000,
                "backgroundImage": 'assets/images/background/29.jpg',
                "logo": 'assets/images/logo/login.png',
                "title": ""
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "duration": 10000,
                "backgroundImage": 'assets/images/background/29.jpg',
                "logo": 'assets/images/logo/login.png',
                "title": ""
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "duration": 10000,
                "backgroundImage": 'assets/images/background/31.jpg',
                "logo": 'assets/images/logo/login-3.png',
                "title": "IONICTEMPLATE"
            };
        };
        this.getEventsForTheme = function (menuItem, navCtrl) {
            return {
                "onRedirect": function () {
                    navCtrl.pop();
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item, navCtrl) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item, navCtrl)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    SplashScreenService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new Observable(function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    ;
    SplashScreenService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoadingService])
    ], SplashScreenService);
    return SplashScreenService;
}());
export { SplashScreenService };
//# sourceMappingURL=splash-screen-service.js.map