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
var CheckBoxService = /** @class */ (function () {
    function CheckBoxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'checkBoxes'; };
        this.getTitle = function () { return 'Check Boxes'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With Avatar", "theme": "layout2" },
                { "title": "Simple", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return [
                {
                    "id": 1,
                    "title": "Song",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 2,
                    "title": "Album",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 3,
                    "title": "Artist",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 4,
                    "title": "Song",
                    "icon": "",
                    "favorite": true,
                    "image": ""
                },
                {
                    "id": 5,
                    "title": "Album",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 6,
                    "title": "Artist",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                }
            ];
        };
        this.getDataForLayout2 = function () {
            return [
                {
                    "id": 1,
                    "title": "Vanessa Ryan",
                    "icon": "",
                    "favorite": true,
                    "image": "assets/images/avatar/1.jpg"
                },
                {
                    "id": 2,
                    "title": "Lara Lynn",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/2.jpg"
                },
                {
                    "id": 3,
                    "title": "Gayle Gaines",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/3.jpg"
                },
                {
                    "id": 4,
                    "title": "Barbara Bernard",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/4.jpg"
                },
                {
                    "id": 5,
                    "title": "Josefa Gardner",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/5.jpg"
                },
                {
                    "id": 6,
                    "title": "Juliette Medina",
                    "icon": "",
                    "favorite": true,
                    "image": "assets/images/avatar/6.jpg"
                }
            ];
        };
        this.getDataForLayout3 = function () {
            return [
                {
                    "id": 1,
                    "title": "Song",
                    "favorite": true,
                    "icon": "icon-music-box"
                },
                {
                    "id": 2,
                    "title": "Album",
                    "favorite": false,
                    "icon": "icon-music-box"
                },
                {
                    "id": 3,
                    "title": "Artist",
                    "favorite": false,
                    "icon": "icon-music-box"
                },
                {
                    "id": 4,
                    "title": "Song",
                    "favorite": true,
                    "icon": "icon-music-box"
                },
                {
                    "id": 5,
                    "title": "Album",
                    "favorite": false,
                    "icon": "icon-music-box"
                },
                {
                    "id": 6,
                    "title": "Artist",
                    "favorite": false,
                    "icon": "icon-music-box"
                }
            ];
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onButton: function (item) {
                    that.toastCtrl.presentToast(item.title);
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    CheckBoxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('checkBoxes/' + item.theme)
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
    CheckBoxService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], CheckBoxService);
    return CheckBoxService;
}());
export { CheckBoxService };
//# sourceMappingURL=check-box-service.js.map