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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = {};
        this.params.data = {
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "title": "Creative Studio Form",
            "titleDescription": "Design & Development agency",
            "contentTitle": "About us",
            "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                              Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? \
                              In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; \
                              Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
            "iconLoacation": "icon-map-marker-radius",
            "iconLoacationText": "Design Street, New York, USA",
            "iconWatch": "icon-alarm",
            "iconWatchText": "8:00 to 16:00 working days",
            "iconPhone": "icon-phone",
            "iconPhoneText": "333 222 111",
            "iconEarth": "icon-earth",
            "iconEarthText": "www.csform.com",
            "iconEmail": "icon-email-outline",
            "iconEmailText": "dev@csform.com",
            "titleMap": "Here we are :",
            "map": {
                "lat": 40.712562,
                "lng": -74.005911,
                "zoom": 15,
                "mapTypeControl": true,
                "streetViewControl": true
            }
        };
        this.params.events = {
            'onLike': function (item) {
                console.log("Like");
            },
            'onFavorite': function (item) {
                item.favorite = !item.favorite;
                console.log("Favorite");
            },
            'onShare': function (item) {
                console.log("Share");
            },
        };
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-about',
            templateUrl: 'about.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map