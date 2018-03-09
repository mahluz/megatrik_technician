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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = {};
        this.params.data = {
            'toolBarTitle': 'Big image',
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'items': [
                {
                    backgroundImage: 'assets/images/avatar-large/1.jpg',
                    title: 'Fragment Example 1'
                },
                {
                    backgroundImage: 'assets/images/avatar-large/2.jpg',
                    title: 'Fragment Example 2'
                },
                {
                    backgroundImage: 'assets/images/avatar-large/3.jpg',
                    title: 'Fragment Example 3'
                }
            ]
        };
        this.params.events = {
            'onFinish': function (event) {
                console.log('Finish');
            }
        };
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-help',
            templateUrl: 'help.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], HelpPage);
    return HelpPage;
}());
export { HelpPage };
//# sourceMappingURL=help.js.map