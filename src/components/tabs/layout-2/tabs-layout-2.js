var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
var TabsLayout2 = /** @class */ (function () {
    function TabsLayout2() {
    }
    __decorate([
        Input('data'),
        __metadata("design:type", Object)
    ], TabsLayout2.prototype, "data", void 0);
    __decorate([
        Input('events'),
        __metadata("design:type", Object)
    ], TabsLayout2.prototype, "events", void 0);
    __decorate([
        ViewChild('tabs'),
        __metadata("design:type", Object)
    ], TabsLayout2.prototype, "tabRef", void 0);
    TabsLayout2 = __decorate([
        IonicPage(),
        Component({
            selector: 'tabs-layout-2',
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [])
    ], TabsLayout2);
    return TabsLayout2;
}());
export { TabsLayout2 };
//# sourceMappingURL=tabs-layout-2.js.map