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
var ItemDetailsPageAppearanceAnimation = /** @class */ (function () {
    // If we navigated to this page, we will have an item available as a nav param
    function ItemDetailsPageAppearanceAnimation(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.params.data = this.service.load(this.page);
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageAppearanceAnimation = __decorate([
        IonicPage(),
        Component({
            templateUrl: 'item-details-appearance-animation.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ItemDetailsPageAppearanceAnimation);
    return ItemDetailsPageAppearanceAnimation;
}());
export { ItemDetailsPageAppearanceAnimation };
//# sourceMappingURL=item-details-appearance-animation.js.map