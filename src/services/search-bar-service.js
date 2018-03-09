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
var SearchBarService = /** @class */ (function () {
    function SearchBarService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'searchBars'; };
        this.getTitle = function () { return 'Search bars'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "Field + header", "theme": "layout2" },
                { "title": "Field + header 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "toolBarTitle": "Simple",
                "items": [
                    {
                        "title": "Friends",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Enemies",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Neutral",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Family",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Guests",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Students",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Friends",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Enemies",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Neutral",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Family",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Guests",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Students",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "toolBarTitle": "Field + header",
                "headerImage": "assets/images/background/30.jpg",
                "searchText": "Search by",
                "items": [
                    {
                        "title": "Song",
                        "icon": "icon-music-box"
                    },
                    {
                        "title": "Album",
                        "icon": "icon-headset"
                    },
                    {
                        "title": "Artist",
                        "icon": "icon-human-child"
                    },
                    {
                        "title": "Genre",
                        "icon": "icon-menu"
                    },
                    {
                        "title": "Song",
                        "icon": "icon-music-box"
                    },
                    {
                        "title": "Album",
                        "icon": "icon-headset"
                    },
                    {
                        "title": "Artist",
                        "icon": "icon-human-child"
                    },
                    {
                        "title": "Genre",
                        "icon": "icon-menu"
                    },
                    {
                        "title": "Album",
                        "icon": "icon-headset"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "headerImage": "assets/images/background/9.jpg",
                "items": [
                    {
                        "id": 1,
                        "title": "Monument walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 2,
                        "title": "River walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 3,
                        "title": "City walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 4,
                        "title": "Park walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 5,
                        "title": "Vilage walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 6,
                        "title": "Lake walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 7,
                        "title": "Castle walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 8,
                        "title": "Beach walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onTextChange': function (text) {
                    that.toastCtrl.presentToast(text);
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: {},
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
    SearchBarService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('searchBars/' + item.theme)
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
    SearchBarService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], SearchBarService);
    return SearchBarService;
}());
export { SearchBarService };
//# sourceMappingURL=search-bar-service.js.map