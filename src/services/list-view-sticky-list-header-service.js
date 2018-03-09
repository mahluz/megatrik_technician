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
var ListViewStickyListHeaderService = /** @class */ (function () {
    function ListViewStickyListHeaderService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'stickyListHeader'; };
        this.getTitle = function () { return 'Sticky List header'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "Product", "theme": "layout2" },
                { "title": "Post", "theme": "layout3" }
            ];
        };
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "groupName": "Jazz",
                        "items": [
                            {
                                "id": 1,
                                "title": "Dejesus Norris",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$58.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 2,
                                "title": "Gayle Gaines",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$16.99",
                                "subtitle": "16 songs"
                            },
                            {
                                "id": 3,
                                "title": "Prince Phelps",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$8.29",
                                "subtitle": "92 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Blues",
                        "items": [
                            {
                                "id": 1,
                                "title": "Keri Hudson",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$13.95",
                                "subtitle": "93 songs"
                            },
                            {
                                "id": 2,
                                "title": "Duran Clayton",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$3.89",
                                "subtitle": "43 songs"
                            },
                            {
                                "id": 3,
                                "title": "Schmidt English",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$45.06",
                                "subtitle": "62 songs"
                            },
                            {
                                "id": 4,
                                "title": "Lara Lynn",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$56.66",
                                "subtitle": "81 songs"
                            },
                            {
                                "id": 5,
                                "title": "Perry Bradley",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$6.78",
                                "subtitle": "2 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Rock and roll",
                        "items": [
                            {
                                "id": 1,
                                "title": "Randall Hurley",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$3.99",
                                "subtitle": "4 songs"
                            },
                            {
                                "id": 2,
                                "title": "Josefa Gardner",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$9.99",
                                "subtitle": "51 songs"
                            },
                            {
                                "id": 3,
                                "title": "Vega Hayes",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$7.99",
                                "subtitle": "40 songs"
                            },
                            {
                                "id": 4,
                                "title": "Burns Marks",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$45.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 5,
                                "title": "Byrd Hewitt",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$39.75",
                                "subtitle": "55 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "R&B",
                        "items": [
                            {
                                "id": 1,
                                "title": "Solis Mullen",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$34.59",
                                "subtitle": "41 songs"
                            },
                            {
                                "id": 2,
                                "title": "Lottie Stone",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$44.99",
                                "subtitle": "48 songs"
                            },
                            {
                                "id": 3,
                                "title": "Bates Dunn",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$89.45",
                                "subtitle": "70 songs"
                            },
                            {
                                "id": 4,
                                "title": "Benton Willis",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$3.10",
                                "subtitle": "6 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Country Song",
                        "items": [
                            {
                                "id": 1,
                                "title": "Barbara Bernard",
                                "image": "assets/images/avatar/4.jpg",
                                "price": "$7.99",
                                "subtitle": "85 songs"
                            },
                            {
                                "id": 2,
                                "title": "Megan Singleton",
                                "image": "assets/images/avatar/5.jpg",
                                "price": "$7.39",
                                "subtitle": "59 songs"
                            },
                            {
                                "id": 3,
                                "title": "Guy Mccoy",
                                "image": "assets/images/avatar/6.jpg",
                                "price": "$13.99",
                                "subtitle": "24 songs"
                            },
                            {
                                "id": 4,
                                "title": "Cline Lindsay",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$75.95",
                                "subtitle": "40 songs"
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
                        "groupName": "Shirts",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Shirt",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/15.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/17.jpg",
                                "image5": "assets/images/background/18.jpg",
                                "price": "$33.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Trendy Black Shirt",
                                "image1": "assets/images/background/18.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$28.17",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Shoes",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Shoes",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/19.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/17.jpg",
                                "price": "$31.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Black Shoes",
                                "image1": "assets/images/background/17.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$25.69",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "title": "Trendy Shoes",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/18.jpg",
                                "image4": "assets/images/background/19.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$13.66",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Jacket",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Jacket",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/17.jpg",
                                "image4": "assets/images/background/16.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$17.89",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Trendy Black Jacket",
                                "image1": "assets/images/background/15.jpg",
                                "image2": "assets/images/background/16.jpg",
                                "image3": "assets/images/background/17.jpg",
                                "image4": "assets/images/background/18.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$55.01",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "title": "Brown Jacket",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/18.jpg",
                                "image4": "assets/images/background/19.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$14.45",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "T-Shirt",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White T-Shirt",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/15.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/17.jpg",
                                "image5": "assets/images/background/18.jpg",
                                "price": "$17.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Black T-Shirt",
                                "image1": "assets/images/background/18.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$44.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "groupName": "Yesterday",
                        "dateTime": "January 19, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Julia Petersen",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/1.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Holman Valencia",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/2.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "Today",
                        "dateTime": "June 26, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Marisa Cain",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/3.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Dejesus Norris",
                                "title": "Lorem ipsum dolor sit amet.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/4.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "tomorrow",
                        "dateTime": "August 07, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Gayle Gaines",
                                "title": "Lorem ipsum dolor sit amet, consectetur.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/5.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Prince Phelps",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/5.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
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
                'onProceed': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onBuy': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast(item);
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
    ListViewStickyListHeaderService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('listView/stickyListHeader/' + item.theme)
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
    ListViewStickyListHeaderService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ListViewStickyListHeaderService);
    return ListViewStickyListHeaderService;
}());
export { ListViewStickyListHeaderService };
//# sourceMappingURL=list-view-sticky-list-header-service.js.map