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
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { App } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, auth, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.app = app;
        this.params = {};
        this.params.data = {
            "headerImage": "assets/images/background/2.jpg",
            "avatar": "assets/images/avatar/0.jpg",
            "items": [
                {
                    "id": 1,
                    "title": "Logout",
                    "image": "http://www.free-icons-download.net/images/logout-log-out-icon-30024.png",
                    "icon": "icon-heart-outline",
                    "favorite": false
                }
            ]
        };
        this.params.events = {
            'onFavorite': function (item) {
                item.favorite = !item.favorite;
                this.toastCtrl.presentToast("Favorite");
            },
            'onItemClick': function (item) {
                console.log(item.title);
                auth.logout().subscribe(function (allowed) {
                    if (allowed) {
                        app.getRootNav().setRoot("HomePage");
                    }
                    else {
                    }
                });
            },
        };
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthServiceProvider,
            App])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map