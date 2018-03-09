var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './loading-service';
var SpinnerService = /** @class */ (function () {
    function SpinnerService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'spinners'; };
        this.getTitle = function () { return 'Spinners'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" }
            ];
        };
        this.getDataForAll = function () {
            return [
                { "icon": "tail-spin" },
                { "icon": "oval" },
                { "icon": "audio" },
                { "icon": "bars" },
                { "icon": "hearts" },
                { "icon": "three-dots" },
                { "icon": "puff" },
                { "icon": "grid" },
                { "icon": "ball-triangle" },
                { "icon": "circles" }
            ];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                spinner: true,
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
        };
    }
    SpinnerService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new Observable(function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForAll());
            observer.complete();
        });
    };
    ;
    SpinnerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoadingService])
    ], SpinnerService);
    return SpinnerService;
}());
export { SpinnerService };
//# sourceMappingURL=spinner-service.js.map