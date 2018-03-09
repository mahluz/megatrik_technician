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
var ListViewDragAndDropService = /** @class */ (function () {
    function ListViewDragAndDropService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'dragAndDrop'; };
        this.getTitle = function () { return 'Drag and Drop'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA header", "theme": "layout2" },
                { "title": "Medium item with avatar", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "Playlist Name",
                "description": "Author: White Castaneda",
                "duration": "35:72",
                "icon": "icon-check",
                "items": [
                    {
                        "id": 1,
                        "title": "Surprise Of Midnight",
                        "author": "Author: Vanessa Ryan",
                        "image": "assets/images/avatar/0.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 2,
                        "title": "Brave Heart",
                        "author": "Author: Meredith Hendricks",
                        "image": "assets/images/avatar/1.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 3,
                        "title": "Broken Fever",
                        "author": "Author: Carol Kelly",
                        "image": "assets/images/avatar/2.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 4,
                        "title": "Come With Me",
                        "author": "Author: Barrera Ramsey",
                        "image": "assets/images/avatar/3.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 5,
                        "title": "Petty Game",
                        "author": "Author: Holman Valencia",
                        "image": "assets/images/avatar/4.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 6,
                        "title": "Business Of Tears",
                        "author": "Author: Marisa Cain",
                        "image": "assets/images/avatar/5.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 7,
                        "title": "She Said I Miss You",
                        "author": "Author: Dejesus Norris",
                        "image": "assets/images/avatar/6.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 8,
                        "title": "Darling, So Do I",
                        "author": "Author: Gayle Gaines",
                        "image": "assets/images/avatar/0.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 9,
                        "title": "I'm All Alone",
                        "author": "Author: Prince Phelps",
                        "image": "assets/images/avatar/1.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 10,
                        "title": "Need My Worries",
                        "author": "Author: Keri Hudson",
                        "image": "assets/images/avatar/2.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 11,
                        "title": "Dark Of Midnight",
                        "author": "Author: Duran Clayton",
                        "image": "assets/images/avatar/3.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 12,
                        "title": "I Know I'm Lonely",
                        "author": "Author: Schmidt English",
                        "image": "assets/images/avatar/4.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 13,
                        "title": "She's Trouble",
                        "author": "Author: Lara Lynn",
                        "image": "assets/images/avatar/5.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 14,
                        "title": "He Heard He's Crazy",
                        "author": "Author: Randall Hurley",
                        "image": "assets/images/avatar/6.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Order No. 1",
                "description": "Will be shipped: 15.5.2016.",
                "buttonText": "PROCEED",
                "headerImage": "assets/images/background/17.jpg",
                "price": "$42.99",
                "items": [
                    {
                        "id": 1,
                        "title": "Black Shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/17.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 2,
                        "title": "Black Sweater",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/18.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 3,
                        "title": "Shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/19.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 4,
                        "title": "White Shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/20.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 5,
                        "title": "White T shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/21.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 6,
                        "title": "T shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/22.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 7,
                        "title": "Hoodies",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/23.jpg",
                        "oldPrice": "$42.99",
                        "shipping": "free shipping",
                        "newPrice": "$35.99"
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
                        "title": "Isaac Reid",
                        "description": "from Brogan ",
                        "image": "assets/images/avatar/0.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Jason Graham",
                        "description": "from Rehrersburg",
                        "image": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Abigail Ross",
                        "description": "from Durham ",
                        "image": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Justin Rutherford",
                        "description": "from Callaghan",
                        "image": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Nicholas Henderson",
                        "description": "from Manitou",
                        "image": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Elizabeth Mackenzie",
                        "description": "from Weedville",
                        "image": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Melanie Ferguson",
                        "description": "from Curtice",
                        "image": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Fiona Kelly",
                        "description": "from Barronett",
                        "image": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Nicholas King",
                        "description": "from Urie",
                        "image": "assets/images/avatar/8.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "description": "from Blackgum",
                        "image": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Sophie Lyman",
                        "description": "from Williston",
                        "image": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Carl Ince",
                        "description": "from Norvelt",
                        "image": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 13,
                        "title": "Michelle Slater",
                        "description": "from Maxville",
                        "image": "assets/images/avatar/12.jpg"
                    },
                    {
                        "id": 14,
                        "title": "Ryan Mathis",
                        "description": "from Bannock",
                        "image": "assets/images/avatar/13.jpg"
                    },
                    {
                        "id": 15,
                        "title": "Julia Grant",
                        "description": "from Nutrioso",
                        "image": "assets/images/avatar/14.jpg"
                    },
                    {
                        "id": 16,
                        "title": "Hannah Martin",
                        "description": "from Bluetown",
                        "image": "assets/images/avatar/15.jpg"
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
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("Proceed");
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
    ListViewDragAndDropService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('listView/dragAndDrop/' + item.theme)
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
    ListViewDragAndDropService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ListViewDragAndDropService);
    return ListViewDragAndDropService;
}());
export { ListViewDragAndDropService };
//# sourceMappingURL=list-view-drag-and-drop-service.js.map