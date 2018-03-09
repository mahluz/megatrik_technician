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
var MapsLayout3 = /** @class */ (function () {
    function MapsLayout3() {
    }
    MapsLayout3.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MapsLayout3.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MapsLayout3.prototype, "events", void 0);
    MapsLayout3 = __decorate([
        IonicPage(),
        Component({
            selector: 'maps-layout-3',
            templateUrl: 'maps.html'
        }),
        __metadata("design:paramtypes", [])
    ], MapsLayout3);
    return MapsLayout3;
}());
export { MapsLayout3 };
//# sourceMappingURL=maps-layout-3.js.map