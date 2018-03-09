var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ToastService } from '../../services/toast-service';
import { TabsService } from '../../services/tabs-service';
import { IonicPage } from 'ionic-angular';
var TabPage5 = /** @class */ (function () {
    function TabPage5(tabsService, toastCtrl) {
        var _this = this;
        this.tabsService = tabsService;
        this.toastCtrl = toastCtrl;
        this.params = {};
        this.tabsService.load("tab5").subscribe(function (snapshot) {
            _this.params = snapshot;
        });
    }
    TabPage5.prototype.ngOnChanges = function (changes) {
        this.params = changes['data'].currentValue;
    };
    TabPage5.prototype.onItemClick = function (item) {
        this.toastCtrl.presentToast("Folow");
    };
    TabPage5 = __decorate([
        IonicPage(),
        Component({
            templateUrl: 'tab-page-5.html',
            providers: [TabsService, ToastService]
        }),
        __metadata("design:paramtypes", [TabsService, ToastService])
    ], TabPage5);
    return TabPage5;
}());
export { TabPage5 };
//# sourceMappingURL=tab-page-5.js.map