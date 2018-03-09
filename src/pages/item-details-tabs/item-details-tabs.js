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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
var ItemDetailsPageTabs = /** @class */ (function () {
    function ItemDetailsPageTabs(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            if (this.params.tabsLayout1) {
                this.params.data = [
                    { page: "TabPage1", title: "tab 1" },
                    { page: "TabPage2", title: "tab 2" },
                    { page: "TabPage3", title: "tab 3" }
                ];
            }
            if (this.params.tabsLayout2) {
                this.params.data = [
                    { page: "TabPage4", icon: "heart" },
                    { page: "TabPage5", icon: "star" },
                    { page: "TabPage6", icon: "settings" }
                ];
            }
            if (this.params.tabsLayout3) {
                this.params.data = [
                    { page: "TabPage1", title: "tab 1" },
                    { page: "TabPage2", title: "tab 2" },
                    { page: "TabPage3", title: "tab 3" },
                    { page: "TabPage4", title: "tab 4" }
                ];
            }
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageTabs = __decorate([
        IonicPage(),
        Component({
            templateUrl: 'item-details-tabs.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ItemDetailsPageTabs);
    return ItemDetailsPageTabs;
}());
export { ItemDetailsPageTabs };
//# sourceMappingURL=item-details-tabs.js.map