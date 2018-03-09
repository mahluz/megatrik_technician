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
import { LoadingService } from './loading-service';
var RangeService = /** @class */ (function () {
    function RangeService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'range'; };
        this.getTitle = function () { return 'Range'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "layout1" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "layout1": {
                    "title": "BASIC",
                    "value": 10
                },
                "layout2": {
                    "title": "WITH ICONS",
                    "iconLeft": "volume-mute",
                    "iconRight": "volume-up",
                    "min": "-200",
                    "max": "200",
                    "value": 0
                },
                "layout3": {
                    "textLeft": "A",
                    "textRight": "A",
                    "title": "WITH PREDEFINED STEPS",
                    "min": "1000",
                    "max": "2000",
                    "step": "100",
                    "value": 20
                },
                "layout4": {
                    "title": "TWO SLIDERS",
                    "min": "1",
                    "max": "100",
                    "step": "10",
                    "value": {
                        "lower": 20,
                        "upper": 70
                    },
                    "textLeft": "1",
                    "textRight": "10"
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {
                'onChange': function (item) { }
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
    RangeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(function (observer) {
                _this.af
                    .object('ranges')
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
    RangeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, LoadingService])
    ], RangeService);
    return RangeService;
}());
export { RangeService };
//# sourceMappingURL=range-service.js.map