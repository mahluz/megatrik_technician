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
var MenuService = /** @class */ (function () {
    function MenuService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "List Views", "theme": "listViews", "icon": "icon-format-align-justify", "listView": true, "component": "", "singlePage": false },
                { "title": "Parallax", "theme": "parallax", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": false },
                { "title": "Login Pages", "theme": "login", "icon": "icon-lock-open-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Register Pages", "theme": "register", "icon": "icon-comment-account", "listView": false, "component": "", "singlePage": false },
                { "title": "Image Gallery", "theme": "imageGallery", "icon": "icon-apps", "listView": false, "component": "", "singlePage": false },
                { "title": "Splash Screen", "theme": "splashScreens", "icon": "icon-logout", "listView": false, "component": "", "singlePage": false },
                { "title": "Check Boxs", "theme": "checkBoxes", "icon": "icon-checkbox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Search Bars", "theme": "searchBars", "icon": "icon-magnify", "listView": false, "component": "", "singlePage": false },
                { "title": "Typo + small components", "theme": "textViews", "icon": "icon-tumblr", "listView": false, "component": "", "singlePage": false },
                { "title": "Wizard", "theme": "wizard", "icon": "icon-cellphone-settings", "listView": false, "component": "", "singlePage": false },
                { "title": "Spinner", "theme": "spinner", "icon": "icon-image-filter-tilt-shift", "listView": false, "component": "", "singlePage": false },
                { "title": "Tabs", "theme": "tabs", "icon": "icon-view-array", "listView": false, "component": "", "singlePage": false },
                { "title": "Maps", "theme": "maps", "icon": "icon-google-maps", "listView": false, "component": "", "singlePage": false },
                { "title": "QRCode", "theme": "qrcode", "icon": "icon-qrcode", "listView": false, "component": "", "singlePage": false },
                { "title": "Radio Button", "theme": "radioButton", "icon": "icon-radiobox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Range", "theme": "range", "icon": "icon-toggle-switch-off", "listView": false, "component": "", "singlePage": false },
                { "title": "Toggle", "theme": "toggle", "icon": "icon-toggle-switch", "listView": false, "component": "", "singlePage": false },
                { "title": "Select", "theme": "select", "icon": "icon-menu-down", "listView": true, "component": "", "singlePage": false },
                { "title": "Action Sheet", "theme": "actionSheet", "icon": "icon-dots-horizontal", "listView": false, "component": "", "singlePage": false }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "background": "assets/images/background/16.jpg",
                "image": "assets/images/logo/login-3.png",
                "title": "Ionic3 UI Theme - Blue Light"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('menu')
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
    MenuService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService])
    ], MenuService);
    return MenuService;
}());
export { MenuService };
//# sourceMappingURL=menu-service.js.map