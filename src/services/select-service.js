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
var SelectService = /** @class */ (function () {
    function SelectService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'select'; };
        this.getTitle = function () { return 'Select'; };
        this.getAllThemes = function () {
            return [
                { "title": "Single Select", "theme": "layout1" },
                { "title": "Multi Select", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "title": "Select",
                "layout1": {
                    "title": "City",
                    "selectedItem": 12,
                    "header": "Basic dialog",
                    "items": [
                        {
                            "id": 12,
                            "title": "New York"
                        },
                        {
                            "id": 14,
                            "title": "Paris"
                        },
                        {
                            "id": 13,
                            "title": "Amsterdam"
                        },
                        {
                            "id": 15,
                            "title": "Gotham City"
                        }
                    ]
                },
                "layout2": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                "layout3": {
                    "title": "Address",
                    "header": "With Action sheet",
                    "selectedItem": 31,
                    "items": [
                        {
                            "id": 31,
                            "title": "Choose address"
                        },
                        {
                            "id": 32,
                            "title": "222 Duffield Street"
                        },
                        {
                            "id": 34,
                            "title": "198 Clark Street"
                        },
                        {
                            "id": 33,
                            "title": "588 Kenmore Terrace"
                        }
                    ]
                },
                "layout4": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                },
                "layout5": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                "layout6": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
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
    SelectService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('select')
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
    SelectService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService, ToastService])
    ], SelectService);
    return SelectService;
}());
export { SelectService };
//# sourceMappingURL=select-service.js.map