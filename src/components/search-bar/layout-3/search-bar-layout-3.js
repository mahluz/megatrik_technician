var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
var SearchBarLayout3 = /** @class */ (function () {
    function SearchBarLayout3() {
        this.searchTerm = "";
    }
    SearchBarLayout3.prototype.getItems = function (event) {
        var _this = this;
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter(function (item) {
            return item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchBarLayout3.prototype.onEvent = function (event, item) {
        if (this.events[event]) {
            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
            }
            else {
                this.events[event](item);
            }
        }
        console.log(event);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "events", void 0);
    SearchBarLayout3 = __decorate([
        IonicPage(),
        Component({
            selector: 'search-bar-layout-3',
            templateUrl: 'search-bar.html'
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout3);
    return SearchBarLayout3;
}());
export { SearchBarLayout3 };
//# sourceMappingURL=search-bar-layout-3.js.map