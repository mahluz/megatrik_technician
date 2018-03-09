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
var ListViewGoogleCardsService = /** @class */ (function () {
    function ListViewGoogleCardsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'googleCards'; };
        this.getTitle = function () { return 'Google Cards'; };
        this.getAllThemes = function () {
            return [
                { "title": "Styled cards", "theme": "layout1" },
                { "title": "Styled cards 2", "theme": "layout2" },
                { "title": "Full image cards", "theme": "layout3" }
            ];
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "PlaylistName",
                "description": "Author:Username",
                "duration": "35:72",
                "items": [
                    {
                        "id": 1,
                        "title": "Jessica Miles",
                        "image": "assets/images/avatar-small/0.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 2,
                        "title": "Natasha Gamble",
                        "image": "assets/images/avatar-small/1.jpg",
                        "description": "Birth year: 1980",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 3,
                        "title": "Julia Petersen",
                        "image": "assets/images/avatar-small/2.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 4,
                        "title": "Marisa Cain",
                        "image": "assets/images/avatar-small/3.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 5,
                        "title": "Lara Lynn",
                        "image": "assets/images/avatar-small/4.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 6,
                        "title": "Megan Singleton",
                        "image": "assets/images/avatar-small/5.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 7,
                        "title": "Susanna Simmons",
                        "image": "assets/images/avatar-small/6.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 8,
                        "title": "Juliette Medina",
                        "image": "assets/images/avatar-small/7.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Card Title 1",
                        "titleHeader": "Lorem Ipsum 1",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/1.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 2,
                        "title": "Card Title 2",
                        "titleHeader": "Lorem Ipsum 2",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/2.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 3,
                        "title": "Card Title 3",
                        "titleHeader": "Lorem Ipsum 3",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/5.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 4,
                        "title": "Card Title 4",
                        "titleHeader": "Lorem Ipsum 4",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/3.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 5,
                        "title": "Card Title 5",
                        "titleHeader": "Lorem Ipsum 5",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/1.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "refreshMessage": "Pull to refresh...",
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/0.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 2,
                        "image": "assets/images/background/9.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 3,
                        "image": "assets/images/background/8.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 4,
                        "image": "assets/images/background/10.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 5,
                        "image": "assets/images/background/13.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 6,
                        "image": "assets/images/background/11.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 7,
                        "image": "assets/images/background/12.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "id": 8,
                        "image": "assets/images/background/0.jpg",
                        "title": "Card Title",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    }
                ]
            };
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onExplore': function (item) {
                    that.toastCtrl.presentToast("Explore");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("onLike");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("onFavorite");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
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
    ListViewGoogleCardsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('listView/googleCards/' + item.theme)
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
    ListViewGoogleCardsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ListViewGoogleCardsService);
    return ListViewGoogleCardsService;
}());
export { ListViewGoogleCardsService };
//# sourceMappingURL=list-view-google-card-service.js.map