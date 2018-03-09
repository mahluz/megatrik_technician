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
var ListViewAppearanceAnimationService = /** @class */ (function () {
    function ListViewAppearanceAnimationService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'appearanceAnimations'; };
        this.getTitle = function () { return 'Appearance animations'; };
        this.getAllThemes = function () {
            return [
                { "title": "Fade in left", "theme": "layout1" },
                { "title": "Fade in right", "theme": "layout2" },
                { "title": "Fade in down", "theme": "layout3" },
                { "title": "Fade in", "theme": "layout4" },
                { "title": "Zoom in", "theme": "layout5" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Isaac Raid",
                        "image": "assets/images/avatar/0.jpg",
                        "favorite": true
                    },
                    {
                        "id": 2,
                        "title": "Jason Graham",
                        "image": "assets/images/avatar/1.jpg",
                        "favorite": false
                    },
                    {
                        "id": 3,
                        "title": "Abigail Ross",
                        "image": "assets/images/avatar/2.jpg",
                        "favorite": true
                    },
                    {
                        "id": 4,
                        "title": "Justin Rutherford",
                        "image": "assets/images/avatar/3.jpg",
                        "favorite": false
                    },
                    {
                        "id": 5,
                        "title": "Nicholas Henderson",
                        "image": "assets/images/avatar/4.jpg",
                        "favorite": false
                    },
                    {
                        "id": 6,
                        "title": "Elizabeth Mackenzie",
                        "image": "assets/images/avatar/5.jpg",
                        "favorite": true
                    },
                    {
                        "id": 7,
                        "title": "Melanie Ferguson",
                        "image": "assets/images/avatar/6.jpg",
                        "favorite": false
                    },
                    {
                        "id": 8,
                        "title": "Fiona Kelly",
                        "image": "assets/images/avatar/7.jpg",
                        "favorite": true
                    },
                    {
                        "id": 9,
                        "title": "Nicholas King",
                        "image": "assets/images/avatar/8.jpg",
                        "favorite": true
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "image": "assets/images/avatar/9.jpg",
                        "favorite": true
                    },
                    {
                        "id": 11,
                        "title": "Sophie Lyman",
                        "image": "assets/images/avatar/10.jpg",
                        "favorite": false
                    },
                    {
                        "id": 12,
                        "title": "Carl Ince",
                        "image": "assets/images/avatar/11.jpg",
                        "favorite": false
                    },
                    {
                        "id": 13,
                        "title": "Michelle Slater",
                        "image": "assets/images/avatar/12.jpg",
                        "favorite": false
                    },
                    {
                        "id": 14,
                        "title": "Ryan Mathis",
                        "image": "assets/images/avatar/13.jpg",
                        "favorite": false
                    },
                    {
                        "id": 15,
                        "title": "Julia Grant",
                        "image": "assets/images/avatar/14.jpg",
                        "favorite": false
                    },
                    {
                        "id": 16,
                        "title": "Hannah Martin",
                        "image": "assets/images/avatar/15.jpg",
                        "favorite": false
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
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
                'onCancel': function (item) {
                    that.toastCtrl.presentToast("cancel");
                },
                'onComplete': function (item) {
                    that.toastCtrl.presentToast("complete");
                }
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
    ListViewAppearanceAnimationService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('listView/appearanceAnimations/' + item.theme)
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
    ListViewAppearanceAnimationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ListViewAppearanceAnimationService);
    return ListViewAppearanceAnimationService;
}());
export { ListViewAppearanceAnimationService };
//# sourceMappingURL=list-view-appearance-animation-service.js.map