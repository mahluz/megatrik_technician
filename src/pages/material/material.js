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
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaterialPage = /** @class */ (function () {
    function MaterialPage(navCtrl, navParams) {
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
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 2,
                    "title": "Natasha Gamble",
                    "image": "assets/images/avatar-small/1.jpg",
                    "description": "Birth year: 1980",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 3,
                    "title": "Julia Petersen",
                    "image": "assets/images/avatar-small/2.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 4,
                    "title": "Marisa Cain",
                    "image": "assets/images/avatar-small/3.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 5,
                    "title": "Lara Lynn",
                    "image": "assets/images/avatar-small/4.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 6,
                    "title": "Megan Singleton",
                    "image": "assets/images/avatar-small/5.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 7,
                    "title": "Susanna Simmons",
                    "image": "assets/images/avatar-small/6.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 8,
                    "title": "Juliette Medina",
                    "image": "assets/images/avatar-small/7.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
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
    MaterialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialPage');
    };
    MaterialPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-material',
            templateUrl: 'material.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MaterialPage);
    return MaterialPage;
}());
export { MaterialPage };
//# sourceMappingURL=material.js.map