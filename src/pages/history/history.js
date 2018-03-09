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
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = {};
        this.params.data = {
            "title": "PlaylistName",
            "description": "Author:Username",
            "duration": "35:72",
            "items": [
                {
                    "id": 1,
                    "title": "Jessica Miles",
                    "image": "assets/images/avatar-small/0.jpg",
                    "description": "Service date: 12 January 2017",
                    "shortDescription": "Service type : Electricity Repair",
                    "longDescription": "Address : Sekar Gading Blok Q No. 9 Semarang",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-thumb-down"
                },
                {
                    "id": 2,
                    "title": "Natasha Gamble",
                    "image": "assets/images/avatar-small/1.jpg",
                    "description": "Service date: 12 January 2017",
                    "shortDescription": "Service type : Electricity Repair",
                    "longDescription": "Address : Sekar Gading Blok Q No. 9 Semarang",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-thumb-down"
                }
            ]
        };
        this.params.events = {
            'onItemClick': function (item) {
                this.toastCtrl.presentToast(item);
            },
            'onExplore': function (item) {
                this.toastCtrl.presentToast("Explore");
            },
            'onShare': function (item) {
                this.toastCtrl.presentToast("Share");
            },
            'onLike': function (item) {
                this.toastCtrl.presentToast("onLike");
            },
            'onFavorite': function (item) {
                this.toastCtrl.presentToast("onFavorite");
            },
            'onFab': function (item) {
                this.toastCtrl.presentToast("Fab");
            },
        };
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-history',
            templateUrl: 'history.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], HistoryPage);
    return HistoryPage;
}());
export { HistoryPage };
//# sourceMappingURL=history.js.map