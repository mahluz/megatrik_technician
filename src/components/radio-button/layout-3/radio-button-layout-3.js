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
var RadioButtonLayout3 = /** @class */ (function () {
    function RadioButtonLayout3() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Input('data'),
        __metadata("design:type", Object)
    ], RadioButtonLayout3.prototype, "data", void 0);
    __decorate([
        Input('events'),
        __metadata("design:type", Object)
    ], RadioButtonLayout3.prototype, "events", void 0);
    RadioButtonLayout3 = __decorate([
        IonicPage(),
        Component({
            selector: 'radio-button-layout-3',
            templateUrl: 'radio-button.html'
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonLayout3);
    return RadioButtonLayout3;
}());
export { RadioButtonLayout3 };
//# sourceMappingURL=radio-button-layout-3.js.map