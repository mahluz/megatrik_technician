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
var ToggleService = /** @class */ (function () {
    function ToggleService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'toggle'; };
        this.getTitle = function () { return 'Toggle'; };
        this.getAllThemes = function () {
            return [
                { "title": "With avatars", "theme": "layout1" },
                { "title": "Simple 2", "theme": "layout2" },
                { "title": "Simple", "theme": "layout3" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "With avatars",
                "items": [
                    {
                        "id": 0,
                        "title": "Graciela Mitchell",
                        "subtitle": "mitchell@mail.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/0.jpg"
                    },
                    {
                        "id": 1,
                        "title": "Sherry Hale ",
                        "subtitle": "hale@gmail.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Erna Alexander",
                        "subtitle": "alexander@mail.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Soto Edwards",
                        "subtitle": "edwards@outlook.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Marcia Greer",
                        "subtitle": "greer@outlook.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Janice Wilder",
                        "subtitle": "wilder@yahoo.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Lindsey Mcgowan",
                        "subtitle": "mcgowan@mail.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Lucy Bender",
                        "subtitle": "bender@yahoo.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Wedi Michaeln",
                        "subtitle": "michael@gmail.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/8.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Sophia Cochran",
                        "subtitle": "cochran@yahoo.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Sherri Stokes",
                        "subtitle": "stokes@mail.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Britney Soto",
                        "subtitle": "soto@yahoo.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Lucile Mccormick",
                        "subtitle": "mccormick@outlook.com",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/12.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Simple 2",
                "items": [
                    {
                        "id": 1,
                        "title": "mitchell@mail.com",
                        "subtitle": "Graciela",
                        "isChecked": true
                    },
                    {
                        "id": 2,
                        "title": "murray@yahoo.com",
                        "subtitle": "Terrell",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "hines@outlook.com",
                        "subtitle": "Branch",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "wade@outlook.com",
                        "subtitle": "Jensen",
                        "isChecked": false
                    },
                    {
                        "id": 5,
                        "title": "hale@gmail.com",
                        "subtitle": "Sherry",
                        "isChecked": false
                    },
                    {
                        "id": 6,
                        "title": "harrington@gmail.com",
                        "subtitle": "Gail",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "norman@mail.com",
                        "subtitle": "Shawna",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "alexander@mail.com",
                        "subtitle": "Erna",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "oneil@yahoo.com",
                        "subtitle": "Cohen",
                        "isChecked": false
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "Simple",
                "items": [
                    {
                        "id": 0,
                        "title": "France",
                        "isChecked": true
                    },
                    {
                        "id": 1,
                        "title": "Czech Republic",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "Andorra",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "Costa Rica",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "Trinidad and Tobago",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "St. Helena",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "Maldives",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "Tanzania",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "Philippines",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "Djibouti",
                        "isChecked": false
                    },
                    {
                        "id": 10,
                        "title": "Brunei Darussalam",
                        "isChecked": false
                    },
                    {
                        "id": 11,
                        "title": "Uzbekistan",
                        "isChecked": false
                    },
                    {
                        "id": 12,
                        "title": "Moldova",
                        "isChecked": false
                    }
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
    ToggleService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('toggle/' + item.theme)
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
    ToggleService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ToggleService);
    return ToggleService;
}());
export { ToggleService };
//# sourceMappingURL=toggle-service.js.map