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
var MapsService = /** @class */ (function () {
    function MapsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'maps'; };
        this.getTitle = function () { return 'Maps'; };
        this.getAllThemes = function () {
            return [
                { "title": "GMAPS + Location  Details", "theme": "layout1" },
                { "title": "GMAPS + About Us", "theme": "layout2" },
                { "title": "Full Screen View", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "title": "Museum of modern art",
                "titleDescription": "Art Boulevard, New York, USA",
                "reviews": "4.12 (78 reviews)",
                "contentTitle": "In short",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "iconLoacation": "icon-map-marker-radius",
                "iconLoacationText": "Design Street, New York, USA",
                "iconWatch": "icon-alarm",
                "iconWatchText": "8:00 to 16:00 working days",
                "iconPhone": "icon-phone",
                "iconPhoneText": "333 222 111",
                "iconEarth": "icon-earth",
                "iconEarthText": "www.csform.com",
                "iconEmail": "icon-email-outline",
                "iconEmailText": "dev@csform.com",
                "iconsStars": [
                    {
                        "iconActive": "icon-star-outline",
                        "iconInactive": "icon-star",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star-outline",
                        "iconInactive": "icon-star",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star-outline",
                        "iconInactive": "icon-star",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star-outline",
                        "iconInactive": "icon-star",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star-outline",
                        "iconInactive": "icon-star",
                        "isActive": false
                    }
                ],
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "title": "Creative Studio Form",
                "titleDescription": "Design & Development agency",
                "contentTitle": "About us",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "iconLoacation": "icon-map-marker-radius",
                "iconLoacationText": "Design Street, New York, USA",
                "iconWatch": "icon-alarm",
                "iconWatchText": "8:00 to 16:00 working days",
                "iconPhone": "icon-phone",
                "iconPhoneText": "333 222 111",
                "iconEarth": "icon-earth",
                "iconEarthText": "www.csform.com",
                "iconEmail": "icon-email-outline",
                "iconEmailText": "dev@csform.com",
                "titleMap": "Here we are :",
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                    that.toastCtrl.presentToast("Favorite");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onSkipPrevious': function (item) {
                    that.toastCtrl.presentToast("Skip Previous");
                },
                'onPlay': function (item) {
                    that.toastCtrl.presentToast("Play");
                },
                'onSkipNext': function (item) {
                    that.toastCtrl.presentToast("Skip Next");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
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
    MapsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('maps/' + item.theme)
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
    MapsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], MapsService);
    return MapsService;
}());
export { MapsService };
//# sourceMappingURL=maps-service.js.map