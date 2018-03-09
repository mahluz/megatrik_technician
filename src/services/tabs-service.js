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
import { LoadingService } from './loading-service';
var TabsService = /** @class */ (function () {
    function TabsService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'tabs'; };
        this.getTitle = function () { return 'Tabs'; };
        this.getAllThemes = function () {
            return [
                { "title": "Footer tab - text", "theme": "layout1" },
                { "title": "Footer tab - icons", "theme": "layout2" },
                { "title": "Header tab - text", "theme": "layout3" }
            ];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.charAt(0).toUpperCase() +
                menuItem.slice(1)]();
        };
        this.getDataForTab1 = function () {
            return {
                "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/ionic2blue.appspot.com/o/avatar-large%2F5.jpg?alt=media&token=d296522d-8e91-45f0-b4df-300edff801ce",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "title": "Fragment Example 1"
            };
        };
        this.getDataForTab2 = function () {
            return {
                "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/ionic2blue.appspot.com/o/avatar-large%2F6.jpg?alt=media&token=7adb654c-d7f7-4f55-8eec-84d72f903868",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "title": "Fragment Example 1"
            };
        };
        this.getDataForTab3 = function () {
            return {
                "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/ionic2blue.appspot.com/o/avatar-large%2F7.jpg?alt=media&token=f8001ed6-990f-4bab-9588-038ef2091fb6",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "title": "Fragment Example 1"
            };
        };
        this.getDataForTab4 = function () {
            return {
                "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/ionic2blue.appspot.com/o/avatar-large%2F5.jpg?alt=media&token=d296522d-8e91-45f0-b4df-300edff801ce",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "title": "Fragment Example 1"
            };
        };
        this.getDataForTab5 = function () {
            return {
                "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/ionic2blue.appspot.com/o/avatar-large%2F6.jpg?alt=media&token=7adb654c-d7f7-4f55-8eec-84d72f903868",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "title": "Fragment Example 1"
            };
        };
        this.getDataForTab6 = function () {
            return {
                "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/ionic2blue.appspot.com/o/avatar-large%2F7.jpg?alt=media&token=f8001ed6-990f-4bab-9588-038ef2091fb6",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "title": "Fragment Example 1"
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    TabsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('tab/' + item)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new Observable(function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ;
    TabsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService])
    ], TabsService);
    return TabsService;
}());
export { TabsService };
//# sourceMappingURL=tabs-service.js.map