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
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { LoginPage } from '../../pages/login/login';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.data = {};
        this.params = {};
        // service.load().subscribe(snapshot => {
        //   this.data = snapshot;
        // });
        this.params.data = {
            "duration": 10000,
            "backgroundImage": 'assets/images/background/29.jpg',
            "logo": 'assets/images/logo/login.png',
            "title": ""
        };
        this.params.events = {
            "onRedirect": function () {
                navCtrl.push("LoginPage");
            }
        };
    }
    HomePage.prototype.login = function () {
        // without lazy loading
        this.navCtrl.push(LoginPage);
    };
    HomePage.prototype.signup = function () {
        // lazy loading
        this.navCtrl.push('SignupPage');
    };
    HomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [HomeService]
        }),
        __metadata("design:paramtypes", [NavController, HomeService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map