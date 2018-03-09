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
var ActionSheetService = /** @class */ (function () {
    function ActionSheetService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'actionSheet'; };
        this.getTitle = function () { return 'Action Sheet'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "News", "theme": "layout2" },
                { "title": "With Text Header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "Basic",
                "headerImage": "assets/images/background/26.jpg",
                "shareIcon": "ios-more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Add to Cart",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "Delete Item"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "dixisse isaac",
                        "subtitle": "subtilissima illud",
                        "category": "nOVUM LUDUM",
                        "button": "$14.99",
                        "description": "Comparari cum technicitate progreditur priorem quae habebat effectum in intimo ac numquam perituro & commercii societatis et socialis instrumentis, est unice delectabat, tanto celeritas adoptionis filiorum, in vitae usum deducitur.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Invenimus quod de proelio et user mos significant generatae socialis contentus in locis coniciunt in sui civitas active versantur in progressionem in products et servicia et recensionem. Notam ostendere ab advocatis de interest in in occupatus timendus fuerit productum vel servitium quam consummatio, et usus eius et co-progressionem hanc occasionem praebet ad eos, et per facultatem publice agnita quod aliqualiter pro conlatione."
                            },
                            {
                                "id": 2,
                                "description": "Labore et dolore eu consequat cupidatat commodo met enim sit ipsum ut sint duis minim. Sint aliqua pariatur duis Xercitation est ad ut. Sancti minim deserunt laborum voluptate velit esse ipsum veniam deserunt veniam proident sint non exercitationem."
                            },
                            {
                                "id": 3,
                                "description": "Lectionum ac recentius in desktop software quasi operturus Jeep libellorum ex eros etiam accumsan. Non remansit quinque saecula non tantum, sed etiam in saltu electronic condimentum, remanserant per se unum. Is eram in 1960 popularized cum remissionis de Letraset Folia accumsan."
                            },
                            {
                                "id": 4,
                                "description": "Lectionum ac recentius in desktop software quasi operturus Jeep libellorum ex eros etiam accumsan. Non remansit quinque saecula non tantum, sed etiam in saltu electronic condimentum, remanserant per se unum. Is eram in 1960 popularized cum remissionis de Letraset Folia accumsan."
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "News",
                "headerImage": "assets/images/background/23.jpg",
                "title": "Infinit pontem in Sinis. Quod locus non videre finem pontis. VII deambulatio inter homines pereunt.",
                "subtitle": "per marescalluml",
                "category": "certe",
                "avatar": "assets/images/avatar/3.jpg",
                "shareIcon": "ios-more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Add to Cart",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "Delete Item"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "subtitle": "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium,' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo."
                    },
                    {
                        "id": 2,
                        "subtitle": "Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?"
                    },
                    {
                        "id": 3,
                        "subtitle": "It takes sursum magis, nimis longum est aedificate (usque ad paginam fere CLX) Ad validam in mia quia actio, sed altiore hoc est a dolor modern thriller, et fortiter mentis habitu femineo (adhuc inusitato scelus ficta). Jaq Hazell vigilare sit an author."
                    },
                    {
                        "id": 4,
                        "subtitle": "Vesalius habet cum ramosis in lupinotuum, conscripserit et comici librorum, sed saeva Lane videt eum quasi animam suam antiquis nota mundo, quamvis tempus suum ingenia sunt paulo plus crevit et hi qui crediderant, cum ex Novus York ad urbem est viridius, affluentes, et suburbana earum."
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "With Text Header",
                "shareIcon": "ios-more",
                "actionSheet": {
                    "title": "Choose what to do with this card?",
                    "buttons": [
                        {
                            "text": "Read more",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Delete Card"
                        },
                        {
                            "text": "Disable Card"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "category": "offer optimus",
                        "image": "assets/images/background/2.jpg",
                        "title": "Aliquam Liberum Ride",
                        "subtitle": "Dunbar, Bangladesh",
                        "button": "$35.99"
                    },
                    {
                        "id": 2,
                        "category": "res pelagus",
                        "image": "assets/images/background/1.jpg",
                        "title": "De Aeris Aperta",
                        "subtitle": "Harold, Spain",
                        "button": "$12.99"
                    },
                    {
                        "id": 3,
                        "category": "optimus unius tortae",
                        "image": "assets/images/background/0.jpg",
                        "title": "Mare turtures",
                        "subtitle": "Hilltop, France",
                        "button": "$13.45"
                    },
                    {
                        "id": 4,
                        "category": "Mons",
                        "image": "assets/images/background/3.jpg",
                        "title": "Mons Trout",
                        "subtitle": "Boonville, Mexico",
                        "button": "$38.60"
                    },
                    {
                        "id": 5,
                        "category": "Aliquam Pontem",
                        "image": "assets/images/background/4.jpg",
                        "title": "Aliquam Pontem",
                        "subtitle": "Bath, Finland",
                        "button": "$40.85"
                    },
                    {
                        "id": 6,
                        "category": "certe optimus",
                        "image": "assets/images/background/5.jpg",
                        "title": "Scaena Eventus Pelagus",
                        "subtitle": "Cazadero, United Kingdom",
                        "button": "$56.55"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onItemClickActionSheet': function (item) {
                    that.toastCtrl.presentToast(item.button.text);
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
    ActionSheetService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('actionSheet/' + item.theme)
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
    ActionSheetService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], ActionSheetService);
    return ActionSheetService;
}());
export { ActionSheetService };
//# sourceMappingURL=action-sheet-service.js.map