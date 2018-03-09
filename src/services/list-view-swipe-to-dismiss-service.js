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
var ListViewSwipeToDismissService = /** @class */ (function () {
    function ListViewSwipeToDismissService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'swipeToDismiss'; };
        this.getTitle = function () { return 'Swipe to dismiss'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA", "theme": "layout2" },
                { "title": "Full with image", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "HeaderTitle",
                "description": "HeaderSubtitle",
                "shortDescription": "35:72",
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "iconPlay": "icon-play-circle-outline",
                "items": [
                    {
                        "id": 1,
                        "title": "Song Of Souls",
                        "description": "Shawna Norman",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/0.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 2,
                        "title": "Tune Of My Obsessions",
                        "description": "Janice Wilder",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/1.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 3,
                        "title": "Reject Her Tomorrow",
                        "description": "Lucy Bender",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/2.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 4,
                        "title": "Troubles Of My Blues",
                        "description": "ouglas Burks",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/3.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 5,
                        "title": "Broken Tonight",
                        "description": "Sophia Cochran",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/4.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 6,
                        "title": "Sure Choices",
                        "description": "Lara Lynn",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/5.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 7,
                        "title": "A Storm Is Coming",
                        "description": "Juliette Medina",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/6.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 8,
                        "title": "He Heard He's Crazy",
                        "description": "Vanessa Ryan",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/7.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/17.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 2,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/18.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 3,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/19.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 4,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/20.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 5,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/21.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 6,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/22.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 7,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/23.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 8,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/17.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 9,
                        "title": "ProductName",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/18.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/7.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 2,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/9.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 3,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/10.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 4,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/11.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 5,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/12.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 6,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/13.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 7,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/9.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 8,
                        "title": "ItemTitle",
                        "description": "ItemSubtitle",
                        "image": "assets/images/background-small/15.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
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
    ListViewSwipeToDismissService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('listView/swipeToDismiss/' + item.theme)
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
    ListViewSwipeToDismissService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ListViewSwipeToDismissService);
    return ListViewSwipeToDismissService;
}());
export { ListViewSwipeToDismissService };
//# sourceMappingURL=list-view-swipe-to-dismiss-service.js.map