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
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';
var RadioButtonService = /** @class */ (function () {
    function RadioButtonService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'radioButton'; };
        this.getTitle = function () { return 'Radio Button'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With avatars", "theme": "layout2" },
                { "title": "Simple 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "Your country",
                "selectedItem": 3,
                "items": [
                    { "id": 1, "title": "Norway" },
                    { "id": 2, "title": "Ireland" },
                    { "id": 4, "title": "Slovak Republic" },
                    { "id": 3, "title": "Canada" },
                    { "id": 5, "title": "United Kingdom" },
                    { "id": 6, "title": "Philippines" },
                    { "id": 7, "title": "Italy" },
                    { "id": 8, "title": "Brazil" },
                    { "id": 9, "title": "Russian Federation" },
                    { "id": 10, "title": "Mexico" },
                    { "id": 11, "title": "Cyprus" },
                    { "id": 12, "title": "Czech Republic" },
                    { "id": 13, "title": "Austria" }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Following",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Grant Marshall", "subtitle": "marshall@yahoo.com", "avatar": "assets/images/avatar/0.jpg" },
                    { "id": 2, "title": "Jessica Miles", "subtitle": "miles@mail.com", "avatar": "assets/images/avatar/1.jpg" },
                    { "id": 4, "title": "Natasha Gamble", "subtitle": "gamble@outlook.com", "avatar": "assets/images/avatar/2.jpg" },
                    { "id": 3, "title": "Holman Valencia", "subtitle": "valencia@outlook.com", "avatar": "assets/images/avatar/3.jpg" },
                    { "id": 5, "title": "Prince Phelps", "subtitle": "phelps@gmail.com", "avatar": "assets/images/avatar/4.jpg" },
                    { "id": 6, "title": "Perry Bradley", "subtitle": "bradley@outlook.com", "avatar": "assets/images/avatar/5.jpg" },
                    { "id": 7, "title": "Fitzgerald Stanton", "subtitle": "stanton@mail.com", "avatar": "assets/images/avatar/6.jpg" },
                    { "id": 8, "title": "Byrd Hewitt", "subtitle": "hewitt@outlook.com", "avatar": "assets/images/avatar/7.jpg" },
                    { "id": 9, "title": "Barbara Bernard", "subtitle": "bernard@yahoo.com", "avatar": "assets/images/avatar/8.jpg" },
                    { "id": 10, "title": "Cline Lindsay", "subtitle": "lindsay@gmail.com", "avatar": "assets/images/avatar/9.jpg" }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "Loctions",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Dunbar", "subtitle": "Bangladesh" },
                    { "id": 2, "title": "Motley", "subtitle": "Kuwait" },
                    { "id": 4, "title": "Boonville", "subtitle": "Mexico" },
                    { "id": 3, "title": "Chesapeake", "subtitle": "Netherlands Antilles" },
                    { "id": 5, "title": "Sanders", "subtitle": "Liechtenstein" },
                    { "id": 6, "title": "Bath", "subtitle": "Finland" },
                    { "id": 7, "title": "Holtville", "subtitle": "Greenland" },
                    { "id": 8, "title": "Indio", "subtitle": "Brazi" },
                    { "id": 9, "title": "Cazadero", "subtitle": "United Kingdom" },
                    { "id": 10, "title": "Bridgetown", "subtitle": "Poland" },
                    { "id": 11, "title": "Fowlerville", "subtitle": "Micronesia" },
                    { "id": 12, "title": "Enlow", "subtitle": "Congo" },
                    { "id": 13, "title": "Marne", "subtitle": "Chile" }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RadioButtonService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('radioButton/' + item.theme)
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
    RadioButtonService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], RadioButtonService);
    return RadioButtonService;
}());
export { RadioButtonService };
//# sourceMappingURL=radio-button-service.js.map