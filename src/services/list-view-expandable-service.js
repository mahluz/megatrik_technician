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
var ListViewExpandableService = /** @class */ (function () {
    function ListViewExpandableService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'expandable'; };
        this.getTitle = function () { return 'Expandable'; };
        this.getAllThemes = function () {
            return [
                { "title": "List big image", "theme": "layout1" },
                { "title": "Full image with CTA", "theme": "layout2" },
                { "title": "Centered with header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Artist1",
                        "description": "SINGER",
                        "image": "assets/images/avatar/15.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/10.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/11.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/12.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/13.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Artist2",
                        "description": "BASSO",
                        "image": "assets/images/avatar/2.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName1",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName2",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName3",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName4",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/13.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 5,
                                "title": "AlbumName5",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/12.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 6,
                                "title": "AlbumName6",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/11.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Artist3",
                        "description": "GUITARIST",
                        "image": "assets/images/avatar/3.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName1",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/11.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName2",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/12.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName3",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/13.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName4",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 5,
                                "title": "AlbumName5",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Artist4",
                        "description": "SINGER",
                        "image": "assets/images/avatar/4.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName1",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/0.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName2",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/1.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName3",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/2.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName4",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/3.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Artist5",
                        "description": "DRUMMER",
                        "image": "assets/images/avatar/5.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName1",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName2",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName3",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/6.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName4",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/7.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Artist5",
                        "description": "DRUMMER",
                        "image": "assets/images/avatar/3.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName1",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName2",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName3",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/6.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName4",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/7.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Artist5",
                        "description": "DRUMMER",
                        "image": "assets/images/avatar/4.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "AlbumName1",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 2,
                                "title": "AlbumName2",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 3,
                                "title": "AlbumName3",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/6.jpg",
                                "iconPlay": "icon-play-circle"
                            },
                            {
                                "id": 4,
                                "title": "AlbumName4",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/7.jpg",
                                "iconPlay": "icon-play-circle"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Product 1",
                        "backgroundImage": "assets/images/background/22.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Product 2",
                        "backgroundImage": "assets/images/background/23.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Product 3",
                        "backgroundImage": "assets/images/background/24.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Product 4",
                        "backgroundImage": "assets/images/background/25.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Product 5",
                        "backgroundImage": "assets/images/background/26.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Product 5",
                        "backgroundImage": "assets/images/background/27.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Product 5",
                        "backgroundImage": "assets/images/background/28.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "New York",
                "headerImage": "assets/images/background-small/10.jpg",
                "items": [
                    {
                        "title": "Where to go",
                        "icon": "icon-map-marker-radius",
                        "items": [
                            "Monuments",
                            "Sightseeing",
                            "Historical",
                            "Sport"
                        ]
                    },
                    {
                        "title": "Where to sleep",
                        "icon": "icon-hotel",
                        "items": [
                            "Hotels",
                            "Hostels",
                            "Motels",
                            "Rooms"
                        ]
                    },
                    {
                        "title": "Where to eat",
                        "icon": "icon-silverware-variant",
                        "items": [
                            "Fast Food",
                            "Restorants",
                            "Pubs",
                            "Hotels"
                        ]
                    },
                    {
                        "title": "Where to drink",
                        "icon": "icon-martini",
                        "items": [
                            "Caffes",
                            "Bars",
                            "Pubs",
                            "Clubs"
                        ]
                    },
                    {
                        "title": "Where to go",
                        "icon": "icon-map-marker-radius",
                        "items": [
                            "Monuments",
                            "Sightseeing",
                            "Historical",
                            "Sport"
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("Favorite");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
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
    ListViewExpandableService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                console.log(item.theme);
                _this.af
                    .object('listView/expandable/' + item.theme)
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
    ListViewExpandableService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ListViewExpandableService);
    return ListViewExpandableService;
}());
export { ListViewExpandableService };
//# sourceMappingURL=list-view-expandable-service.js.map